# Agent Guideline for ReportKit

This document is intended for AI agents (LLMs) to ensure they generate correct, type-safe, and idiomatic code when using the `reportkit` library.

## 1. Library Philosophy
ReportKit uses a declarative DSL to build a Report AST (Abstract Syntax Tree). The structure is:
`report` -> `cover` -> `body` (array of `section` or `block`).

## 2. Mandatory Coding Rules for Agents

### A. Type-Safe Tables (Critical)
The `table` function's `headers` must be treated as constant values to allow TypeScript to map them to the row keys.
- **Rule**: Always append `as const` to the headers array.
- **Why**: Without `as const`, TypeScript sees `string[]` instead of specific keys, leading to type errors in `rows`.
- **Consequence**: Failure to use `as const` will result in compilation errors when trying to access row properties.

```typescript
// ✅ Correct
table({
  headers: ['Item', 'Cost'] as const,
  rows: [{ Item: 'Server', Cost: '$500' }]
})

// ❌ Incorrect - will cause TypeScript errors
table({
  headers: ['Item', 'Cost'],  // Missing 'as const'
  rows: [{ Item: 'Server', Cost: '$500' }]
})
```

### B. Smart Metadata Inheritance
- **Rule**: Do not redundantly define `author`, `date`, `department`, `version`, or `tags` in both `report` and `cover`.
- **Logic**: The `report()` function automatically populates the `cover.meta` with values from `report.meta` if they are missing in the cover.
- **Benefit**: Keeps the DSL code clean and concise.
- **Exception**: Override at the cover level only if you need different values for the cover than the report.

```typescript
// ✅ Correct - metadata defined once in report
const myReport = report({
  meta: {
    title: 'Weekly Report',
    author: 'John Doe',
    date: '2026-02-10'
  },
  cover: {
    subtitle: 'Project Status Update'
  },
  // ...
});
```

### C. PDF Generation Workflow
- **Rule**: Always use `async/await`.
- **Rule**: Always call `builder.close()` in a `finally` block to prevent browser process leaks.
- **Consequence**: Forgetting to close the browser will lead to resource leaks and potential crashes in long-running applications.

```typescript
async function generate() {
  const builder = new PDFBuilder();
  try {
    await builder.savePDF(myReport, 'out.pdf');
  } finally {
    await builder.close();  // Essential to prevent resource leaks
  }
}
```

## 3. Theming & Presets
Avoid manually building complex themes unless requested. The default theme is `theme.mono` (minimalist black and white), which is used when no theme is specified.
Prefer built-in presets:
- `theme.mono`: Minimalist black and white (default theme).
- `theme.office`: Clean, professional business look.
- `theme.terminal`: Dark background, neon green text (Hacker/Tech vibe).
- `theme.dark` / `theme.vivid`.

For custom themes, use the `ThemeBuilder`:
```typescript
import { ThemeBuilder } from 'reportkit';

const customTheme = ThemeBuilder.create()
  .withColors({
    primary: '#1e40af', // Deep Blue
    background: '#f8fafc'
  })
  .withTypography({
    fontFamily: `'Pretendard', sans-serif`
  })
  .build();
```

## 4. Common Pitfalls to Avoid
1. **Case Sensitivity**: Table headers must exactly match the keys in the rows. Mismatched casing will cause TypeScript errors.
2. **Margin Handling**: Do not pass `margin` options to `page.pdf()` directly in the builder; the library handles margins via CSS `@page` rules to preserve background colors.
3. **DSL Nesting**: Ensure `body` contains an array of `section()` or other blocks. A `section` cannot be nested inside another `section`'s content directly (use AST-compliant nesting).
4. **Missing Imports**: Always import required functions from 'reportkit'. Common imports include `report`, `section`, `p`, `table`, `PDFBuilder`, and `ThemeBuilder`.
5. **Async/Await**: Remember that PDF generation is asynchronous. Always use async/await or promises appropriately.
6. **No Hallucinated DSL Functions**: Only use functions that actually exist in the library. Do not invent or hallucinate non-existent functions. The available DSL functions are: `report`, `cover`, `section`, `p`, `table`, `list`, `checklist`, `divider`, `image`, `link`, `codeblock`, `code`. Using non-existent functions will result in runtime errors.

## 5. Metadata Schema
- `meta.title`: Required. Used for HTML `<title>` and inherited as the default `cover.title`.
- `meta.date`: Should follow ISO 8601 or a standard string format.
- `meta.author`: Optional, but highly recommended for inheritance.
- `meta.department`: Optional, for organizational context.
- `meta.version`: Optional, for version tracking.
- `meta.tags`: Optional, array of strings for categorization.

## 6. Best Practices for AI Agents
- Always provide complete, runnable code examples when generating solutions
- Use meaningful variable names that reflect the report's purpose
- Follow the hierarchical structure consistently: report → cover → body → sections
- When uncertain about a property name, refer to the TypeScript definitions or use common sense based on the context
- Consider accessibility when generating HTML content
- Use semantic elements appropriately (sections, paragraphs, tables, etc.)
