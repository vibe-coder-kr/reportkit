import {
  ReportNode,
  Block,
  SectionNode,
  ParagraphNode,
  TableNode,
  ListNode,
  DividerNode,
  ImageNode,
  LinkNode,
  CodeBlockNode,
  CoverNode,
} from '../core/types';
import { DesignTokens } from '../theme/tokens';
import { mono } from '../theme/preset';
import { generateReportStyles } from './styles';

export class HTMLRenderer {
  private theme: DesignTokens;

  constructor(theme: DesignTokens = mono) {
    this.theme = theme;
  }

  render(report: ReportNode, margin: { top?: string; bottom?: string; left?: string; right?: string; }): string {
    const hasPageNumbering = report.footer?.pageNumber === true;
    const style = this.generateStyles(margin, hasPageNumbering);
    const body = this.renderReport(report);
    
    // Determine if the theme is dark based on background color brightness
    const isDarkTheme = this.isDarkColor(this.theme.colors.background);
    const hljsTheme = isDarkTheme 
      ? 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css'
      : 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-light.min.css';

    return `<!DOCTYPE html>
<html lang="ko" style="background-color: ${this.theme.colors.background};">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${report.meta.title}</title>
  <link rel="stylesheet" href="${hljsTheme}">
  <style>${style}</style>
</head>
<body style="background-color: ${this.theme.colors.background};">
  <article class="report">
    ${body}
  </article>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
  <script>
    hljs.highlightAll();
  </script>
</body>
</html>`;
  }

  private renderReport(report: ReportNode): string {
    const parts: string[] = [];

    if (report.cover) {
      parts.push(this.renderCover(report.cover));
    }

    if (report.body.length > 0) {
      parts.push('<main class="report-body">');
      report.body.forEach(node => {
        parts.push(this.renderNode(node, 0));
      });
      parts.push('</main>');
    }

    if (report.footer) {
      parts.push(this.renderFooter(report.footer.text));
    }

    return parts.join('\n');
  }

  private renderNode(node: SectionNode | Block, depth: number = 0): string {
    switch (node.kind) {
      case 'section':
        return this.renderSection(node, depth);
      case 'paragraph':
        return this.renderParagraph(node);
      case 'table':
        return this.renderTable(node);
      case 'list':
        return this.renderList(node);
      case 'divider':
        return this.renderDivider(node);
      case 'image':
        return this.renderImage(node);
      case 'link':
        return this.renderLink(node);
      case 'codeblock':
        return this.renderCodeBlock(node);
      default:
        return '';
    }
  }

  private renderCover(cover: CoverNode): string {
    return `
    <header class="report-cover">
      <div class="cover-content">
        ${cover.logo ? `
          <div class="cover-logo">
            <img src="${cover.logo.src}" alt="${cover.logo.alt}"
                 width="${cover.logo.width || 120}"
                 height="${cover.logo.height || 120}">
          </div>
        ` : ''}

        <div class="cover-title">
          <h1>${cover.title}</h1>
          ${cover.subtitle ? `<p class="cover-subtitle">${cover.subtitle}</p>` : ''}
        </div>

        <div class="cover-meta">
          <div class="meta-grid">
            ${cover.meta?.author ? `
              <div class="meta-item author">
                <span class="meta-label">작성자</span>
                <span class="meta-value author">${cover.meta.author}</span>
              </div>
            ` : ''}

            ${cover.meta?.date ? `
              <div class="meta-item date">
                <span class="meta-label">작성일</span>
                <span class="meta-value date">${cover.meta.date}</span>
              </div>
            ` : ''}

            ${cover.meta?.department ? `
              <div class="meta-item department">
                <span class="meta-label">부서</span>
                <span class="meta-value department">${cover.meta.department}</span>
              </div>
            ` : ''}

            ${cover.meta?.version ? `
              <div class="meta-item version">
                <span class="meta-label">버전</span>
                <span class="meta-value version">${cover.meta.version}</span>
              </div>
            ` : ''}

            ${cover.meta?.tags && cover.meta.tags.length > 0 ? `
              <div class="meta-item tags">
                <span class="meta-label">태그</span>
                <span class="meta-value tags">${cover.meta.tags.join(', ')}</span>
              </div>
            ` : ''}
          </div>
        </div>
      </div>
    </header>`;
  }

  private renderSection(section: SectionNode, depth: number = 0): string {
    const headingTag = `h${Math.min(depth + 2, 3)}`;
    const collapsibleClass = section.collapsible ? ' collapsible' : '';
    const sectionId = section.id || `section-${section.title.toLowerCase().replace(/\s+/g, '-')}`;

    return `
    <section class="report-section${collapsibleClass}" id="${sectionId}">
      <${headingTag} class="section-title">
        ${section.title}
      </${headingTag}>
      <div class="section-content">
        ${section.content.map(node => this.renderNode(node, depth + 1)).join('\n')}
      </div>
    </section>`;
  }

  private renderParagraph(p: ParagraphNode): string {
    const emphasisClass = p.emphasis !== 'normal' ? ` text-${p.emphasis}` : '';
    const alignClass = p.align !== 'left' ? ` text-${p.align}` : '';
    const idAttr = p.id ? ` id="${p.id}"` : '';

    return `<p class="paragraph${emphasisClass}${alignClass}"${idAttr}>${p.text}</p>`;
  }

  private renderTable<T extends string[]>(table: TableNode<T>): string {
    const rowsHtml = table.rows.map(row => `
      <tr>
        ${table.headers.map(header => {
          const value = (row as any)[header];
          return `<td>${value ?? ''}</td>`;
        }).join('')}
      </tr>
    `).join('');

    return `
    <div class="table-container">
      ${table.caption ? `<div class="table-caption">${table.caption}</div>` : ''}
      <table class="report-table">
        <thead>
          <tr>
            ${table.headers.map(header => `
              <th>${header}</th>
            `).join('')}
          </tr>
        </thead>
        <tbody>
          ${rowsHtml}
        </tbody>
      </table>
    </div>`;
  }

  private renderList(list: ListNode): string {
    if (list.type === 'checklist') {
      return `
      <div class="checklist-container">
        ${list.items.map((item, index) => `
          <label class="checklist-item">
            <input type="checkbox" ${list.checked?.[index] ? 'checked' : ''} disabled>
            <span class="checklist-text">${item}</span>
          </label>
        `).join('')}
      </div>`;
    }

    const tag = list.type === 'ordered' ? 'ol' : 'ul';
    const listClass = `list-${list.type}`;
    const idAttr = list.id ? ` id="${list.id}"` : '';

    return `
    <${tag} class="${listClass}"${idAttr}>
      ${list.items.map(item => `
        <li>${item}</li>
      `).join('')}
    </${tag}>`;
  }

  private renderDivider(divider: DividerNode): string {
    return `<hr class="divider divider-${divider.style}">`;
  }

  private renderImage(image: ImageNode): string {
    const style = image.width || image.height ? ` style="${image.width ? `width: ${image.width}px;` : ''} ${image.height ? `height: ${image.height}px;` : ''}"` : '';

    return `
    <figure class="image-container">
      <img src="${image.src}" alt="${image.alt}" class="report-image"${style}>
      ${image.caption ? `<figcaption class="image-caption">${image.caption}</figcaption>` : ''}
    </figure>`;
  }

  private renderLink(link: LinkNode): string {
    const target = link.newTab ? ' target="_blank"' : '';
    const rel = link.newTab ? ' rel="noopener noreferrer"' : '';
    const title = link.title ? ` title="${link.title}"` : '';

    return `<a href="${link.href}" class="report-link"${target}${rel}${title}>${link.text}</a>`;
  }

  private renderCodeBlock(codeblock: CodeBlockNode): string {
    const escapedCode = codeblock.code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    let codeContent = escapedCode;
    if (codeblock.showLineNumbers) {
      const lines = escapedCode.split('\n');
      codeContent = lines
        .map((line, i) => `<span class="line-number">${i + 1}</span> ${line}`)
        .join('\n');
    }

    const languageClass = codeblock.language ? ` class="language-${codeblock.language}"` : ' class="language-none"';

    const fileNameHeader = codeblock.fileName
      ? `<div class="codeblock-filename">${codeblock.fileName}</div>`
      : '';

    return `
    <div class="codeblock-container">
      ${fileNameHeader}
      <pre class="codeblock"><code${languageClass}>${codeContent}</code></pre>
    </div>`;
  }

  private renderFooter(text: string): string {
    return `
    <footer class="report-footer">
      <div class="footer-content">
        <span class="footer-text">${text}</span>
      </div>
    </footer>`;
  }

  private isDarkColor(hexColor: string): boolean {
    const cleanHex = hexColor.replace('#', '');
    const r = parseInt(cleanHex.substring(0, 2), 16);
    const g = parseInt(cleanHex.substring(2, 4), 16);
    const b = parseInt(cleanHex.substring(4, 6), 16);

    const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

    return luminance < 0.5;
  }

  private generateStyles(margin: { top?: string; bottom?: string; left?: string; right?: string; }, hasPageNumbering: boolean = false): string {
    return generateReportStyles(this.theme, margin, hasPageNumbering);
  }
}