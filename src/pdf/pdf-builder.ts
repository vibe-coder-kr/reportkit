import puppeteer, { Browser, Page } from 'puppeteer';
import { ReportNode } from '../core/types';
import { HTMLRenderer } from '../render/html-renderer';
import { DesignTokens } from '../theme/tokens';
import { mono } from '../theme/preset';
import { PDFOptions, DEFAULT_PDF_OPTIONS } from './options';

export class PDFBuilder {
  private browser: Browser | null = null;
  private htmlRenderer: HTMLRenderer;

  constructor(theme?: DesignTokens) {
    this.htmlRenderer = new HTMLRenderer(theme || mono);
  }

  async init(): Promise<void> {
    this.browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
  }

  async close(): Promise<void> {
    if (this.browser) {
      await this.browser.close();
      this.browser = null;
    }
  }

  async generatePDF(report: ReportNode, options: PDFOptions = DEFAULT_PDF_OPTIONS): Promise<Buffer> {
    if (!this.browser) {
      await this.init();
    }

    const page = await this.browser!.newPage();
    
    // Apply custom PDF options
    const pdfOptions = { ...DEFAULT_PDF_OPTIONS, ...options };
    
    // Render HTML from report
    const html = this.htmlRenderer.render(report, pdfOptions.margin!);
    
    // Set content to the page
    await page.setContent(html, { waitUntil: 'networkidle0' });

    // Wait for highlight.js to finish processing all code blocks
    await page.evaluate(async () => {
      // Check if hljs is loaded
      if (typeof window !== 'undefined' && typeof (window as any).hljs !== 'undefined') {
        // Wait for any ongoing highlighting to complete
        await new Promise(resolve => {
          // Check if there are any unhighlighted code blocks
          const unhighlightedBlocks = document.querySelectorAll('pre code:not(.hljs)');
          
          if (unhighlightedBlocks.length === 0) {
            // If no unhighlighted blocks, resolve immediately
            resolve(true);
          } else {
            // If there are unhighlighted blocks, wait a bit and check again
            setTimeout(() => {
              resolve(true);
            }, 300);
          }
        });
      }
    });

    // Check if the report has page numbering enabled in footer
    const hasPageNumbering = report.footer?.pageNumber === true;

    // Override displayHeaderFooter if page numbering is requested
    let finalDisplayHeaderFooter = pdfOptions.displayHeaderFooter;
    let finalFooterTemplate = pdfOptions.footerTemplate;

    if (hasPageNumbering) {
      finalDisplayHeaderFooter = true;
      finalFooterTemplate = `
        <div style="font-size: 10px; text-align: center; width: 100%; padding: 5px 0;">
          <span class="pageNumber"></span> / <span class="totalPages"></span>
        </div>
      `;
    }

    // Generate PDF buffer
    const pdfBuffer = await page.pdf({
      format: pdfOptions.format,
      landscape: pdfOptions.orientation === 'landscape',
      printBackground: pdfOptions.printBackground,
      scale: pdfOptions.scale,
      displayHeaderFooter: finalDisplayHeaderFooter,
      headerTemplate: pdfOptions.headerTemplate,
      footerTemplate: finalFooterTemplate,
      preferCSSPageSize: pdfOptions.preferCSSPageSize,
      tagged: pdfOptions.tagged,
    });

    await page.close();

    return pdfBuffer;
  }

  async savePDF(report: ReportNode, filePath: string, options: PDFOptions = DEFAULT_PDF_OPTIONS): Promise<void> {
    const pdfBuffer = await this.generatePDF(report, options);
    const fs = await import('fs');
    await fs.promises.writeFile(filePath, pdfBuffer);
  }

  async generateStyledPDF(report: ReportNode, options: PDFOptions = DEFAULT_PDF_OPTIONS, customCSS?: string): Promise<Buffer> {
    if (!this.browser) {
      await this.init();
    }

    const page = await this.browser!.newPage();
    
    // Apply custom PDF options
    const pdfOptions = { ...DEFAULT_PDF_OPTIONS, ...options };
    
    // Render HTML from report
    let html = this.htmlRenderer.render(report, pdfOptions.margin!);
    
    // Inject custom CSS if provided
    if (customCSS) {
      const styleTag = `<style>${customCSS}</style>`;
      html = html.replace('</head>', `  ${styleTag}\n</head>`);
    }
    
    // Set content to the page
    await page.setContent(html, { waitUntil: 'networkidle0' });

    // Wait for highlight.js to finish processing all code blocks
    await page.evaluate(async () => {
      // Check if hljs is loaded
      if (typeof window !== 'undefined' && typeof (window as any).hljs !== 'undefined') {
        // Wait for any ongoing highlighting to complete
        await new Promise(resolve => {
          // Check if there are any unhighlighted code blocks
          const unhighlightedBlocks = document.querySelectorAll('pre code:not(.hljs)');
          
          if (unhighlightedBlocks.length === 0) {
            // If no unhighlighted blocks, resolve immediately
            resolve(true);
          } else {
            // If there are unhighlighted blocks, wait a bit and check again
            setTimeout(() => {
              resolve(true);
            }, 300);
          }
        });
      }
    });

    // Check if the report has page numbering enabled in footer
    const hasPageNumbering = report.footer?.pageNumber === true;

    // Override displayHeaderFooter if page numbering is requested
    let finalDisplayHeaderFooter = pdfOptions.displayHeaderFooter;
    let finalFooterTemplate = pdfOptions.footerTemplate;

    if (hasPageNumbering) {
      finalDisplayHeaderFooter = true;
      finalFooterTemplate = `
        <div style="font-size: 10px; text-align: center; width: 100%; padding: 5px 0;">
          <span class="pageNumber"></span> / <span class="totalPages"></span>
        </div>
      `;
    }

    // Generate PDF buffer with enhanced styling
    const pdfBuffer = await page.pdf({
      format: pdfOptions.format,
      landscape: pdfOptions.orientation === 'landscape',
      printBackground: pdfOptions.printBackground,
      scale: pdfOptions.scale,
      displayHeaderFooter: finalDisplayHeaderFooter,
      headerTemplate: pdfOptions.headerTemplate,
      footerTemplate: finalFooterTemplate,
      preferCSSPageSize: pdfOptions.preferCSSPageSize,
      tagged: pdfOptions.tagged,
    });

    await page.close();

    return pdfBuffer;
  }
}