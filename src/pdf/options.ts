export interface PDFOptions {
  format?: 'A3' | 'A4' | 'A5' | 'Letter' | 'Legal' | 'Tabloid' | 'Ledger';
  orientation?: 'portrait' | 'landscape';
  margin?: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
  printBackground?: boolean;
  scale?: number;
  displayHeaderFooter?: boolean;
  headerTemplate?: string;
  footerTemplate?: string;
  preferCSSPageSize?: boolean;
  tagged?: boolean;
}

export const DEFAULT_PDF_OPTIONS: PDFOptions = {
  format: 'A4',
  orientation: 'portrait',
  margin: {
    top: '2cm',
    right: '2cm',
    bottom: '2cm',
    left: '2cm',
  },
  printBackground: true,
  scale: 1.0,
  displayHeaderFooter: false,  // Default to false
  headerTemplate: '',          // Empty header template
  footerTemplate: '',          // Empty footer template
  preferCSSPageSize: true,
  tagged: true,
};