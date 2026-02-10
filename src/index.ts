// Core types
export {
  NodeKind,
  ReportMeta,
  ReportNode,
  Block,
  SectionNode,
  ParagraphNode,
  TableNode,
  ListNode,
  CoverNode,
  DividerNode,
  ImageNode,
  LinkNode,
  CodeBlockNode,
} from './core/types';

// Core DSL functions
export {
  report,
  cover,
  section,
  p,
  table,
  list,
  checklist,
  divider,
  image,
  link,
  codeblock,
  code,
} from './core/dsl';

// Constants
export { DEFAULT_REPORT_THEME, REPORT_DATE_FORMAT, SUPPORTED_IMAGE_FORMATS } from './core/constants';

// Theme system
export { DesignTokens } from './theme/tokens';
export * as theme from './theme/preset';
export { ThemeBuilder } from './theme/builder';
export type { ThemeConfig, ThemeName } from './theme/types';

// HTML Renderer
export { HTMLRenderer } from './render/html-renderer';

// PDF Builder
export { PDFBuilder } from './pdf/pdf-builder';
export type { PDFOptions } from './pdf/options';