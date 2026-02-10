import { HTMLRenderer } from './html-renderer';
import { report, section, p, table } from '../core/dsl';

describe('HTMLRenderer', () => {
  const renderer = new HTMLRenderer();

  test('should render report structure', () => {
    const doc = report({
      meta: { title: 'My Report', author: 'Agent', date: '2024-02-10' },
      cover: { title: 'Cover Title', meta: { author: 'Agent', date: '2024-02-10' } },
      body: [
        section({
          title: 'Section 1',
          content: [p('Paragraph content')]
        })
      ]
    });

    const html = renderer.render(doc, {});

    expect(html).toContain('<!DOCTYPE html>');
    expect(html).toContain('<title>My Report</title>');
    expect(html).toContain('<h1>Cover Title</h1>');
    expect(html).toContain('Section 1');
    expect(html).toContain('Paragraph content');
  });

  test('should render table correctly', () => {
    const doc = report({
      meta: { title: 'Table Test', author: 'Agent', date: '2024-02-10' },
      body: [
        table({
          headers: ['Name', 'Value'],
          rows: [{ Name: 'Test', Value: '100' }]
        })
      ]
    });

    const html = renderer.render(doc, {});
    
    expect(html).toContain('<table class="report-table">');
    expect(html).toContain('<th>Name</th>');
    expect(html).toContain('<td>Test</td>');
  });

  test('should apply custom margins', () => {
    const doc = report({
      meta: { title: 'Margin Test', author: 'Agent', date: '2024-02-10' },
      body: []
    });

    const html = renderer.render(doc, { top: '50px' });
    expect(html).toContain('margin-top: 50px');
  });
});
