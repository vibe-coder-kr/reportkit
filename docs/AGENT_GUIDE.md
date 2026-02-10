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

```typescript
// ✅ Correct
table({
  headers: ['Item', 'Cost'] as const,
  rows: [{ Item: 'Server', Cost: '$500' }]
})
```

### B. Smart Metadata Inheritance
- **Rule**: Do not redundantly define `author`, `date`, `department`, `version`, or `tags` in both `report` and `cover`.
- **Logic**: The `report()` function automatically populates the `cover.meta` with values from `report.meta` if they are missing in the cover.
- **Benefit**: Keeps the DSL code clean and concise.

### C. PDF Generation Workflow
- **Rule**: Always use `async/await`.
- **Rule**: Always call `builder.close()` in a `finally` block to prevent browser process leaks.

```typescript
async function generate() {
  const builder = new PDFBuilder();
  try {
    await builder.savePDF(myReport, 'out.pdf');
  } finally {
    await builder.close();
  }
}
```

## 3. Theming & Presets
Avoid manually building complex themes unless requested. Prefer built-in presets:
- `theme.office`: Clean, professional business look.
- `theme.terminal`: Dark background, neon green text (Hacker/Tech vibe).
- `theme.mono`: Minimalist black and white.
- `theme.dark` / `theme.vivid`.

## 4. Common Pitfalls to Avoid
1. **Case Sensitivity**: Table headers must exactly match the keys in the rows.
2. **Margin Handling**: Do not pass `margin` options to `page.pdf()` directly in the builder; the library handles margins via CSS `@page` rules to preserve background colors.
3. **DSL Nesting**: Ensure `body` contains an array of `section()` or other blocks. A `section` cannot be nested inside another `section`'s content directly (use AST-compliant nesting).

## 5. Metadata Schema
- `meta.title`: Required. Used for HTML `<title>` and inherited as the default `cover.title`.
- `meta.date`: Should follow ISO 8601 or a standard string format.
- `meta.author`: Optional, but highly recommended for inheritance.
