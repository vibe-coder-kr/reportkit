# ReportKit

A flexible and customizable report generation library built for the modern web. Create beautiful, professional reports in both HTML and PDF formats with ease.

## ✨ Features

- **Type-Safe DSL**: Intuitive, type-safe API for building reports
- **Modern Design**: Clean, professional styling out of the box
- **Customizable Themes**: Extensive theming system with preset and custom options
- **Flexible Output**: Generate both HTML and PDF reports
- **Bun Optimized**: Built specifically for Bun runtime environment
- **Semantic Structure**: Well-structured, accessible HTML output

## 📦 Installation

Install using your preferred package manager:

With npm:
```bash
npm install reportkit
```

With Bun:
```bash
bun add reportkit
```

## 🚀 Basic Usage

Getting started with ReportKit is simple. Meta information in the `report` function is automatically inherited by the `cover`:

```typescript
import {
  report,
  section,
  p,
  table,
  PDFBuilder
} from 'reportkit';

// Create a professional weekly report
const myReport = report({
  meta: {
    title: 'Project Alpha: Weekly Progress',
    author: 'Lee Min-su',
    date: '2026-02-10',
    department: 'Platform Engineering'
  },
  cover: {
    subtitle: 'Core Infrastructure & API Integration'
  },
  body: [
    section({
      title: 'Executive Summary',
      content: [
        p('This week, Project Alpha has completed core infrastructure setup.'),
        p('Current progress is at 105% compared to the original plan.', {
          emphasis: 'strong'
        })
      ]
    }),
    section({
      title: 'Resource Allocation',
      content: [
        table({
          headers: ['Role', 'Name', 'Allocation'] as const,
          rows: [
            { Role: 'Backend', Name: 'Kim Chul-su', Allocation: '100%' },
            { Role: 'Frontend', Name: 'Lee Young-hee', Allocation: '100%' }
          ],
          caption: 'Team Resource Stats'
        })
      ]
    })
  ]
});

// Generate PDF
async function generateReport() {
  const pdfBuilder = new PDFBuilder();
  
  try {
    await pdfBuilder.savePDF(myReport, './output/weekly-report.pdf');
    console.log('Report generated successfully!');
  } catch (error) {
    console.error('Error generating report:', error);
  } finally {
    await pdfBuilder.close();
  }
}

generateReport();
```

## 🎨 Advanced Usage

Customize your reports with professional themes and advanced features:

```typescript
import {
  report,
  cover,
  section,
  p,
  table,
  ThemeBuilder,
  PDFBuilder
} from 'reportkit';

// Create a custom corporate theme
const customTheme = ThemeBuilder.create()
  .withColors({
    primary: '#1e40af', // Deep Blue
    background: '#f8fafc',
    text: {
      primary: '#0f172a',
      secondary: '#334155'
    }
  })
  .withTypography({
    fontFamily: `'Pretendard', sans-serif`
  })
  .build();

// Create a strategic market analysis report
const strategyReport = report({
  meta: {
    title: '2025 IT Industry Strategy',
    author: 'Strategy Insights Team',
    version: '3.1.0'
  },
  cover: cover({
    title: '2025 IT Industry Strategy',
    subtitle: 'Cloud Native & Generative AI Innovation',
    logo: {
      src: 'https://via.placeholder.com/200x80',
      alt: 'Logo'
    }
  }),
  body: [
    section({
      title: 'I. Market Outlook',
      content: [
        p('The global cloud market is rapidly shifting towards AI-centric PaaS.', {
          emphasis: 'strong'
        })
      ]
    }),
    section({
      title: 'II. Regional Performance',
      content: [
        table({
          headers: ['Region', 'Share', 'Growth'] as const,
          rows: [
            { Region: 'North America', Share: '35%', Growth: '+12.5%' },
            { Region: 'Asia', Share: '43%', Growth: '+25.0%' }
          ],
          highlight: 'column'
        })
      ]
    })
  ]
});

// Generate PDF with custom theme
async function generateStrategyReport() {
  const pdfBuilder = new PDFBuilder(customTheme);
  
  try {
    await pdfBuilder.savePDF(strategyReport, './output/strategy-report.pdf');
    console.log('Strategy report generated successfully!');
  } catch (error) {
    console.error('Error generating strategy report:', error);
  } finally {
    await pdfBuilder.close();
  }
}

generateStrategyReport();
```

## 🛠️ API Overview

### Core Functions

- `report()` - Creates the main report structure
- `section()` - Creates a section with title and content
- `p()` - Creates a paragraph element
- `table()` - Creates a data table with type-safe columns
- `list()` - Creates ordered or unordered lists
- `checklist()` - Creates a checklist with optional checked items
- `divider()` - Adds a visual separator
- `image()` - Embeds an image with optional caption
- `cover()` - Creates a report cover page

### Theming

- `ThemeBuilder` - Class for creating custom themes
- `defaultTheme` - Predefined default theme
- Custom themes can override colors, typography, spacing, and more

### Rendering

- `HTMLRenderer` - Renders reports to HTML
- `PDFBuilder` - Generates PDFs from reports
- Both support custom themes

## 📄 Output Formats

ReportKit supports multiple output formats:

- **HTML**: Semantic, well-structured HTML documents with embedded CSS
- **PDF**: High-quality PDF documents with professional formatting

Both formats maintain consistent styling and structure, making it easy to preview in the browser before generating PDFs.

## 🤖 AI & Agent Friendly

ReportKit is designed with AI agents (LLMs) in mind. If you are using an AI coding assistant (like Cursor, GitHub Copilot, or Gemini), please refer them to our [Agent Guideline](./docs/AGENT_GUIDE.md).

This guide helps AI agents:
- Follow strict TypeScript type safety rules for tables.
- Leverage smart metadata inheritance to write concise code.
- Avoid common pitfalls in PDF generation and styling.

## 🏗️ Project Structure

```
reportkit/
├── docs/
│   └── AGENT_GUIDE.md        # Specialized guide for AI agents/LLMs
├── src/
│   ├── core/
│   │   ├── types.ts          # Core type definitions
│   │   ├── dsl.ts            # DSL helper functions
│   │   └── constants.ts      # Constant values
│   ├── theme/
│   │   ├── tokens.ts         # Design token definitions
│   │   ├── preset.ts         # Predefined themes
│   │   ├── builder.ts        # Theme builder class
│   │   └── types.ts          # Theme-related types
│   ├── render/
│   │   ├── html-renderer.ts  # HTML renderer
│   │   └── utils.ts          # Rendering utilities
│   ├── pdf/
│   │   ├── pdf-builder.ts    # PDF generation
│   │   └── options.ts        # PDF options
│   └── index.ts              # Main exports
├── examples/
│   ├── weekly-report.ts      # Weekly development status example
│   └── strategy-report.ts    # Strategic market analysis example
└── dist/                     # Compiled output
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

Please make sure to update tests as appropriate and follow the existing code style.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.