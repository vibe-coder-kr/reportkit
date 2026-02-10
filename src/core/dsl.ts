import {
  ReportNode,
  ReportMeta,
  CoverNode,
  SectionNode,
  ParagraphNode,
  TableNode,
  ListNode,
  DividerNode,
  ImageNode,
  LinkNode,
  CodeBlockNode,
  SupportedLanguage,
  Block,
} from './types';

export function report(config: {
  meta: ReportMeta;
  theme?: string;
  cover?: Omit<CoverNode, 'kind'>;
  body: (SectionNode | Block)[];
  footer?: {
    text: string;
    pageNumber?: boolean;
  };
}): ReportNode {
  const reportMeta = config.meta;
  let finalCover: CoverNode | undefined = undefined;

  if (config.cover) {
    const coverMeta = config.cover.meta || {};
    finalCover = {
      kind: 'cover',
      ...config.cover,
      title: config.cover.title || reportMeta.title,
      meta: {
        author: coverMeta.author || reportMeta.author,
        date: coverMeta.date || reportMeta.date,
        department: coverMeta.department || reportMeta.department,
        version: coverMeta.version || reportMeta.version,
        tags: coverMeta.tags || reportMeta.tags,
      },
    };
  }

  return {
    kind: 'report',
    meta: reportMeta,
    theme: config.theme,
    cover: finalCover,
    body: config.body,
    footer: config.footer,
  };
}

export function cover(config: Omit<CoverNode, 'kind'>): CoverNode {
  return {
    kind: 'cover',
    ...config,
  };
}

export function section(config: {
  title: string;
  content: Block[];
  collapsible?: boolean;
  id?: string;
}): SectionNode {
  return {
    kind: 'section',
    title: config.title,
    content: config.content,
    collapsible: config.collapsible,
    id: config.id,
  };
}

export function p(
  text: string,
  options?: {
    emphasis?: ParagraphNode['emphasis'];
    align?: ParagraphNode['align'];
    id?: string;
  }
): ParagraphNode {
  return {
    kind: 'paragraph',
    text,
    emphasis: options?.emphasis ?? 'normal',
    align: options?.align ?? 'left',
    id: options?.id,
  };
}

export function table<T extends string[]>(
  config: Omit<TableNode<T>, 'kind'>
): TableNode<T> {
  return {
    kind: 'table',
    ...config,
  };
}

export function list(config: {
  items: string[];
  type?: ListNode['type'];
  checked?: boolean[];
  id?: string;
}): ListNode {
  return {
    kind: 'list',
    items: config.items,
    type: config.type ?? 'unordered',
    checked: config.checked,
    id: config.id,
  };
}

export function checklist(items: string[], checked: boolean[] = []): ListNode {
  return {
    kind: 'list',
    items,
    type: 'checklist',
    checked,
  };
}

export function divider(style: DividerNode['style'] = 'solid'): DividerNode {
  return {
    kind: 'divider',
    style,
  };
}

export function image(config: Omit<ImageNode, 'kind'>): ImageNode {
  return {
    kind: 'image',
    ...config,
  };
}

export function link(config: Omit<LinkNode, 'kind'>): LinkNode {
  return {
    kind: 'link',
    ...config,
  };
}

export function codeblock(config: Omit<CodeBlockNode, 'kind'>): CodeBlockNode {
  return {
    kind: 'codeblock',
    ...config,
  };
}

export function code(code: string, language?: SupportedLanguage): CodeBlockNode {
  return {
    kind: 'codeblock',
    code,
    language,
  };
}