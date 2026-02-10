export type NodeKind =
  | 'report'
  | 'cover'
  | 'section'
  | 'paragraph'
  | 'table'
  | 'list'
  | 'divider'
  | 'image'
  | 'link'
  | 'codeblock';

export interface ReportMeta {
  title: string;
  author?: string;
  date?: string; // ISO 8601 형식
  department?: string;
  version?: string;
  tags?: string[];
}

interface BaseNode {
  kind: NodeKind;
  id?: string;
  className?: string;
}

export interface ParagraphNode extends BaseNode {
  kind: 'paragraph';
  text: string;
  emphasis?: 'normal' | 'strong' | 'muted';
  align?: 'left' | 'center' | 'right' | 'justify';
}

export interface TableNode<T extends string[]> extends BaseNode {
  kind: 'table';
  caption?: string;
  headers: T;
  rows: Array<{ [K in T[number]]: any }>;
  highlight?: 'row' | 'column' | 'none';
}

export interface ListNode extends BaseNode {
  kind: 'list';
  items: string[];
  type: 'ordered' | 'unordered' | 'checklist';
  checked?: boolean[];
}

export interface SectionNode extends BaseNode {
  kind: 'section';
  title: string;
  content: Block[];
  collapsible?: boolean;
}

export interface CoverNode extends BaseNode {
  kind: 'cover';
  title: string;
  subtitle?: string;
  meta?: Omit<ReportMeta, 'title'>;
  logo?: {    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
}

export interface DividerNode extends BaseNode {
  kind: 'divider';
  style: 'solid' | 'dashed' | 'dotted';
}

export interface ImageNode extends BaseNode {
  kind: 'image';
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

export interface LinkNode extends BaseNode {
  kind: 'link';
  href: string;
  text: string;
  title?: string;
  newTab?: boolean;
}

export type SupportedLanguage = 
  | 'javascript' | 'js'
  | 'typescript' | 'ts'
  | 'html'
  | 'css'
  | 'json'
  | 'python' | 'py'
  | 'java'
  | 'cpp' | 'c++'
  | 'csharp' | 'c#'
  | 'php'
  | 'ruby' | 'rb'
  | 'go'
  | 'rust' | 'rs'
  | 'sql'
  | 'bash' | 'shell'
  | 'yaml'
  | 'markdown' | 'md'
  | 'xml'
  | 'dockerfile'
  | 'kotlin'
  | 'swift'
  | 'scala'
  | 'perl'
  | 'r'
  | 'matlab'
  | 'lua'
  | 'assembly' | 'asm'
  | 'powershell' | 'ps1'
  | 'jsx' | 'react'
  | 'tsx' | 'react-ts'
  | 'vue'
  | 'sass'
  | 'scss'
  | 'less'
  | 'stylus'
  | 'graphql'
  | 'protobuf'
  | 'toml'
  | 'ini'
  | 'diff'
  | 'makefile'
  | 'cmake'
  | 'nginx'
  | 'apache'
  | 'docker'
  | 'git'
  | 'regex'
  | 'vim'
  | 'emacs'
  | 'clojure'
  | 'haskell'
  | 'erlang'
  | 'elixir'
  | 'julia'
  | 'dart'
  | 'fortran'
  | 'cobol'
  | 'pascal'
  | 'ada'
  | 'cobol'
  | 'lisp'
  | 'scheme'
  | 'fsharp'
  | 'ocaml'
  | 'crystal'
  | 'nim'
  | 'zig'
  | 'v'
  | 'solidity'
  | 'elm'
  | 'reason'
  | 're'
  | 'sml'
  | 'wasm'
  | 'webassembly'
  | 'brainfuck'
  | 'apl'
  | 'j'
  | 'k'
  | 'q'
  | 'kdb'
  | 'qsharp'
  | 'al'
  | 'c-al'
  | 'abap'
  | 'abnf'
  | 'antlr4'
  | 'g4'
  | 'apache'
  | 'conf'
  | 'apex'
  | 'apl'
  | 'applescript'
  | 'aql'
  | 'arduino'
  | 'ino'
  | 'arff'
  | 'asciidoc'
  | 'adoc'
  | 'aspnet'
  | 'asm6502'
  | 'autohotkey'
  | 'ahk'
  | 'autoit'
  | 'avisynth'
  | 'avs'
  | 'avro-idl'
  | 'idl'
  | 'bash'
  | 'basic'
  | 'bbcode'
  | 'bnf'
  | 'brainfuck'
  | 'bro'
  | 'c'
  | 'csharp'
  | 'cpp'
  | 'cil'
  | 'clike'
  | 'clojure'
  | 'cmake'
  | 'coffeescript'
  | 'coffee'
  | 'concurnas'
  | 'cnc'
  | 'csp'
  | 'css-extras'
  | 'csv'
  | 'cypher'
  | 'd'
  | 'dart'
  | 'dataweave'
  | 'dax'
  | 'dhall'
  | 'diff'
  | 'django'
  | 'dns-zone-file'
  | 'dns-zone'
  | 'dockerfile'
  | 'dot'
  | 'ebnf'
  | 'editorconfig'
  | 'ejs'
  | 'etlua'
  | 'erb'
  | 'erlang'
  | 'excel-formula'
  | 'xlsx'
  | 'xls'
  | 'fsharp'
  | 'factor'
  | 'firestore-security-rules'
  | 'ftl'
  | 'gml'
  | 'gamemakerlanguage'
  | 'gap'
  | 'gcode'
  | 'gdscript'
  | 'gedcom'
  | 'gherkin'
  | 'git'
  | 'glsl'
  | 'gml'
  | 'go-module'
  | 'go-mod'
  | 'graphql'
  | 'groovy'
  | 'haml'
  | 'handlebars'
  | 'hbs'
  | 'haskell'
  | 'haxe'
  | 'hcl'
  | 'hlsl'
  | 'hoon'
  | 'http'
  | 'hpkp'
  | 'hsts'
  | 'ichigojam'
  | 'icon'
  | 'icu-message-format'
  | 'idris'
  | 'idr'
  | 'ignore'
  | 'gitignore'
  | 'hgignore'
  | 'npmignore'
  | 'inform7'
  | 'ini'
  | 'io'
  | 'j'
  | 'java'
  | 'javadoc'
  | 'javadoclike'
  | 'javastacktrace'
  | 'jexl'
  | 'jolie'
  | 'jq'
  | 'jsdoc'
  | 'js-extras'
  | 'json5'
  | 'jsonp'
  | 'jsstacktrace'
  | 'jsx'
  | 'julia'
  | 'keepalived'
  | 'keyman'
  | 'kotlin'
  | 'kumir'
  | 'kusto'
  | 'latex'
  | 'latte'
  | 'less'
  | 'lilypond'
  | 'liquid'
  | 'lisp'
  | 'livescript'
  | 'llvm'
  | 'log'
  | 'lolcode'
  | 'lua'
  | 'magma'
  | 'makefile'
  | 'markdown'
  | 'markup-templating'
  | 'matlab'
  | 'mel'
  | 'mermaid'
  | 'mizar'
  | 'mongodb'
  | 'monkey'
  | 'moonscript'
  | 'n1ql'
  | 'n4js'
  | 'nand2tetris-hdl'
  | 'naniscript'
  | 'nani'
  | 'nasm'
  | 'neon'
  | 'nginx'
  | 'nim'
  | 'nix'
  | 'nsis'
  | 'objc'
  | 'objectivec'
  | 'ocaml'
  | 'opencl'
  | 'openqasm'
  | 'qasm'
  | 'oz'
  | 'parigp'
  | 'parser'
  | 'pascal'
  | 'pascaligo'
  | 'pcaxis'
  | 'peoplecode'
  | 'pcode'
  | 'perl'
  | 'php'
  | 'php-extras'
  | 'plsql'
  | 'powerquery'
  | 'pq'
  | 'mscript'
  | 'powershell'
  | 'processing'
  | 'prolog'
  | 'promql'
  | 'properties'
  | 'protobuf'
  | 'pug'
  | 'puppet'
  | 'pure'
  | 'purebasic'
  | 'purescript'
  | 'python'
  | 'q'
  | 'qml'
  | 'qore'
  | 'r'
  | 'racket'
  | 'ramda'
  | 'rascal'
  | 'reason'
  | 'regex'
  | 'rego'
  | 'renpy'
  | 'rest'
  | 'rip'
  | 'roboconf'
  | 'robotframework'
  | 'robot'
  | 'ruby'
  | 'rust'
  | 'sas'
  | 'sass'
  | 'scala'
  | 'scheme'
  | 'scss'
  | 'shell-session'
  | 'smali'
  | 'smalltalk'
  | 'smarty'
  | 'sml'
  | 'solidity'
  | 'solution-file'
  | 'sln'
  | 'soy'
  | 'sparql'
  | 'rq'
  | 'splunk-spl'
  | 'sqf'
  | 'sql'
  | 'squirrel'
  | 'stan'
  | 'iecst'
  | 'stylus'
  | 'swift'
  | 't4-cs'
  | 't4'
  | 't4-vb'
  | 'tap'
  | 'tcl'
  | 'tt2'
  | 'textile'
  | 'toml'
  | 'tremor'
  | 'tsx'
  | 'ttcn'
  | 'ttcn3'
  | 'turtle'
  | 'ttl'
  | 'twig'
  | 'typescript'
  | 'typoscript'
  | 'ts'
  | 'unrealscript'
  | 'uc'
  | 'unity3dasset'
  | 'vbnet'
  | 'velocity'
  | 'verilog'
  | 'vhdl'
  | 'vim'
  | 'visual-basic'
  | 'vba'
  | 'vb'
  | 'warpscript'
  | 'wasm'
  | 'web-idl'
  | 'webidl'
  | 'winstone'
  | 'xml-doc'
  | 'xojo'
  | 'xquery'
  | 'yaml'
  | 'yang'
  | 'zig';

export interface CodeBlockNode extends BaseNode {
  kind: 'codeblock';
  code: string;
  language?: SupportedLanguage;
  showLineNumbers?: boolean;
  fileName?: string;
}

export type Block =
  | ParagraphNode
  | TableNode<any>
  | ListNode
  | DividerNode
  | ImageNode
  | LinkNode
  | CodeBlockNode
  | SectionNode;

export interface ReportNode extends BaseNode {
  kind: 'report';
  meta: ReportMeta;
  theme?: string;
  cover?: CoverNode;
  body: (SectionNode | Block)[];
  footer?: {
    text: string;
    pageNumber?: boolean;
  };
}