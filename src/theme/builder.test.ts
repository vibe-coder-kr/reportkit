import { ThemeBuilder } from './builder';
import { mono } from './preset';

describe('ThemeBuilder', () => {
  test('should create a default theme based on mono', () => {
    const theme = ThemeBuilder.create().build();
    expect(theme).toEqual(mono);
  });

  test('should update primary color', () => {
    const theme = ThemeBuilder.create()
      .withColors({ primary: '#ff0000' })
      .build();
    
    expect(theme.colors.primary).toBe('#ff0000');
    // Ensure secondary color remains from mono
    expect(theme.colors.secondary).toBe(mono.colors.secondary);
  });

  test('should update typography', () => {
    const theme = ThemeBuilder.create()
      .withTypography({ fontFamily: 'Arial' })
      .build();
    
    expect(theme.typography.fontFamily).toBe('Arial');
  });
});
