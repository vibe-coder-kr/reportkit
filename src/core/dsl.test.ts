import { report, section, p, table, list, checklist } from './dsl';

describe('Core DSL', () => {
  test('report() should create a valid report node', () => {
    const meta = { title: 'Test Report', author: 'Author', date: '2024-01-01' };
    const result = report({
      meta,
      body: []
    });

    expect(result.kind).toBe('report');
    expect(result.meta).toEqual(meta);
    expect(result.body).toEqual([]);
  });

  test('section() should create a valid section node', () => {
    const result = section({
      title: 'Intro',
      content: [p('Hello')]
    });

    expect(result.kind).toBe('section');
    expect(result.title).toBe('Intro');
    expect(result.content[0].kind).toBe('paragraph');
  });

  test('p() should apply options correctly', () => {
    const result = p('Strong text', { emphasis: 'strong', align: 'center' });
    
    expect(result.kind).toBe('paragraph');
    expect(result.text).toBe('Strong text');
    expect(result.emphasis).toBe('strong');
    expect(result.align).toBe('center');
  });

  test('table() should store data correctly', () => {
    const headers = ['Name', 'Age'] as const;
    const rows = [{ Name: 'Alice', Age: 25 }];
    const result = table({ headers: headers as any, rows });

    expect(result.kind).toBe('table');
    expect(result.headers).toEqual(headers);
    expect(result.rows).toEqual(rows);
  });

  test('checklist() should create a list with checklist type', () => {
    const items = ['Task 1', 'Task 2'];
    const checked = [true, false];
    const result = checklist(items, checked);

    expect(result.kind).toBe('list');
    expect(result.type).toBe('checklist');
    expect(result.items).toEqual(items);
    expect(result.checked).toEqual(checked);
  });
});
