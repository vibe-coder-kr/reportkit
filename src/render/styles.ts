import { DesignTokens } from '../theme/tokens';

export function generateReportStyles(theme: DesignTokens, margin: { top?: string; bottom?: string; left?: string; right?: string; }, hasPageNumbering: boolean = false): string {
  const t = theme;
  const pageBottomMargin = hasPageNumbering ? '20mm' : '0';
  
  return `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: ${t.typography.fontFamily};
      font-size: ${t.typography.fontSize.base};
      line-height: ${t.typography.lineHeight.normal};
      color: ${t.colors.text.primary};
      background-color: ${t.colors.background};
      padding: ${t.spacing[8]};
    }

    .report {
      max-width: 210mm;
      margin: 0 auto;
      background-color: ${t.colors.background};
      border: none;
      overflow: hidden;
      font-family: ${t.typography.fontFamily};
    }

    .report-cover {
      padding: ${t.spacing[16]} ${t.spacing[8]};
      text-align: center;
      border-bottom: 1px solid ${t.colors.border};
      background: ${t.colors.background};
      color: ${t.colors.text.primary};
    }

    .cover-content {
      max-width: 600px;
      margin: 0 auto;
    }

    .cover-logo {
      margin-bottom: ${t.spacing[8]};
    }

    .cover-logo img {
      border-radius: ${t.borders.radius.sm};
      border: 1px solid ${t.colors.border};
    }

    .cover-title h1 {
      font-size: ${t.typography.fontSize['3xl']};
      font-weight: ${t.typography.fontWeight.bold};
      margin-bottom: ${t.spacing[4]};
      color: ${t.colors.text.primary};
    }

    .cover-subtitle {
      font-size: ${t.typography.fontSize.xl};
      color: ${t.colors.text.muted};
      margin-bottom: ${t.spacing[12]};
      font-weight: ${t.typography.fontWeight.normal};
    }

    .meta-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: ${t.spacing[6]} ${t.spacing[8]};
      margin-top: ${t.spacing[12]};
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .meta-item {
      text-align: left;
      padding: ${t.spacing[1]} 0;
      display: flex;
      flex-direction: column;
    }

    .meta-item.author {
      grid-column: span 2;
    }

    .meta-item.title {
      grid-column: span 3;
    }

    .meta-label {
      display: block;
      font-size: ${t.typography.fontSize.sm};
      color: ${t.colors.text.muted};
      margin-bottom: ${t.spacing[1]};
      font-weight: ${t.typography.fontWeight.semibold};
      text-transform: uppercase;
      letter-spacing: 0.02em;
    }

    .meta-value {
      display: block;
      font-size: ${t.typography.fontSize.base};
      font-weight: ${t.typography.fontWeight.normal};
      color: ${t.colors.text.primary};
    }

    .meta-value.author {
      font-weight: ${t.typography.fontWeight.bold};
      font-size: ${t.typography.fontSize.lg};
    }

    .meta-value.date {
      font-style: italic;
    }

    .meta-value.department {
      color: ${t.colors.primary};
    }

    .meta-value.version {
      font-family: monospace;
      background-color: ${t.colors.surface};
      padding: ${t.spacing[1]} ${t.spacing[2]};
      border-radius: ${t.borders.radius.sm};
    }

    .meta-value.tags {
      font-style: italic;
      color: ${t.colors.text.muted};
    }

    .report-body {
      padding: ${t.spacing[12]} ${t.spacing[8]};
    }

    .report-section {
      margin-bottom: ${t.spacing[12]};
      page-break-inside: avoid;
    }

    .report-section:last-child {
      margin-bottom: 0;
    }

    .section-title {
      font-size: ${t.typography.fontSize['2xl']};
      font-weight: ${t.typography.fontWeight.bold};
      color: ${t.colors.primary};
      margin-bottom: ${t.spacing[6]};
      padding-bottom: ${t.spacing[2]};
      border-bottom: 1px solid ${t.colors.border};
    }

    .section-content {
      margin-top: ${t.spacing[4]};
      line-height: ${t.typography.lineHeight.tight};
    }

    .paragraph {
      margin-bottom: ${t.spacing[4]};
      text-align: left;
      line-height: ${t.typography.lineHeight.tight};
    }

    .paragraph:last-child {
      margin-bottom: 0;
    }

    .paragraph.text-strong {
      font-weight: ${t.typography.fontWeight.bold};
      color: ${t.colors.text.primary};
    }

    .paragraph.text-muted {
      color: ${t.colors.text.muted};
      font-style: italic;
    }

    .paragraph.text-center {
      text-align: center;
    }

    .paragraph.text-right {
      text-align: right;
    }

    .paragraph.text-justify {
      text-align: justify;
    }

    .table-container {
      margin: ${t.spacing[6]} 0;
      overflow-x: auto;
      border: 1px solid ${t.colors.border};
    }

    .table-caption {
      font-size: ${t.typography.fontSize.sm};
      color: ${t.colors.text.muted};
      margin-bottom: ${t.spacing[2]};
      text-align: center;
      font-weight: ${t.typography.fontWeight.semibold};
      padding: ${t.spacing[2]};
    }

    .report-table {
      width: 100%;
      border-collapse: collapse;
      font-size: ${t.typography.fontSize.sm};
      background: ${t.colors.background};
    }

    .report-table th {
      background-color: ${t.colors.primary};
      color: ${t.colors.text.inverted};
      font-weight: ${t.typography.fontWeight.bold};
      text-align: left;
      padding: ${t.spacing[3]} ${t.spacing[4]};
      border: 1px solid ${t.colors.border};
    }

    .report-table td {
      padding: ${t.spacing[3]} ${t.spacing[4]};
      border: 1px solid ${t.colors.border};
      vertical-align: top;
    }

    .report-table tr:nth-child(even) {
      background-color: ${t.colors.surface};
    }

    .list-unordered,
    .list-ordered {
      margin: ${t.spacing[4]} 0 ${t.spacing[4]} ${t.spacing[8]};
      padding-left: ${t.spacing[4]};
    }

    .list-unordered li,
    .list-ordered li {
      margin-bottom: ${t.spacing[2]};
      line-height: ${t.typography.lineHeight.tight};
    }

    .list-unordered li:last-child,
    .list-ordered li:last-child {
      margin-bottom: 0;
    }

    .checklist-container {
      margin: ${t.spacing[4]} 0;
    }

    .checklist-item {
      display: flex;
      align-items: flex-start;
      margin-bottom: ${t.spacing[3]};
      cursor: default;
      line-height: ${t.typography.lineHeight.tight};
    }

    .checklist-item:last-child {
      margin-bottom: 0;
    }

    .checklist-item input {
      margin-right: ${t.spacing[3]};
      margin-top: ${t.spacing[1]};
    }
    
    .divider {
      border: none;
      height: 1px;
      margin: ${t.spacing[8]} 0;
    }

    .divider-solid {
      border-bottom: 1px solid ${t.colors.border};
      background: none;
    }

    .divider-dashed {
      border-bottom: 1px dashed ${t.colors.border};
      background: none;
    }

    .divider-dotted {
      border-bottom: 1px dotted ${t.colors.border};
      background: none;
    }

    .image-container {
      margin: ${t.spacing[6]} 0;
      text-align: center;
      page-break-inside: avoid;
    }

    .report-image {
      max-width: 100%;
      height: auto;
      border-radius: ${t.borders.radius.sm};
      border: 1px solid ${t.colors.border};
    }

    .image-caption {
      margin-top: ${t.spacing[3]};
      font-size: ${t.typography.fontSize.sm};
      color: ${t.colors.text.muted};
      text-align: center;
      font-style: italic;
      padding: 0 ${t.spacing[2]};
    }

    .report-footer {
      padding: ${t.spacing[6]} ${t.spacing[8]};
      border-top: 1px solid ${t.colors.border};
      background-color: ${t.colors.background};
      text-align: center;
      color: ${t.colors.text.muted};
      font-size: ${t.typography.fontSize.sm};
    }

    .footer-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 600px;
      margin: 0 auto;
    }

    .report-link {
      color: ${t.colors.primary};
      text-decoration: underline;
      transition: color 0.2s ease;
    }

    .codeblock-container {
      margin: ${t.spacing[6]} 0;
      border: 1px solid ${t.colors.border};
      border-radius: ${t.borders.radius.md};
      overflow: hidden;
      background-color: ${t.colors.surface};
      font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    }

    .codeblock-filename {
      padding: ${t.spacing[2]} ${t.spacing[4]};
      background-color: ${t.colors.background};
      border-bottom: 1px solid ${t.colors.border};
      font-size: ${t.typography.fontSize.sm};
      color: ${t.colors.text.muted};
      font-weight: ${t.typography.fontWeight.medium};
    }

    .codeblock {
      margin: 0;
      padding: ${t.spacing[4]};
      overflow-x: auto;
      background-color: ${t.colors.surface};
      color: ${t.colors.text.primary};
      font-size: ${t.typography.fontSize.sm};
      line-height: ${t.typography.lineHeight.tight};
      tab-size: 4;
    }

    .codeblock code {
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
    }

    .line-number {
      color: ${t.colors.text.muted};
      margin-right: ${t.spacing[4]};
      user-select: none;
    }

    @media print {
      @page {
        margin-top: 0;
        margin-bottom: ${pageBottomMargin};
        margin-left: 0;
        margin-right: 0;
      }

      body {
        margin-top: ${margin.top};
        margin-bottom: ${margin.bottom};
        margin-left: ${margin.left};
        margin-right: ${margin.right};
        padding: 0;
        background: ${t.colors.background};
        -webkit-print-color-adjust: exact;
      }

      .report {
        box-shadow: none;
        border: none;
        background: ${t.colors.background};
      }
    }
  `;
}