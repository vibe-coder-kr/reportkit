import { DesignTokens } from './tokens';
import { mono } from './preset';

export class ThemeBuilder {
  private tokens: DesignTokens;

  constructor(baseTheme: DesignTokens = mono) {
    this.tokens = { ...baseTheme };
  }

  withColors(colors: Partial<DesignTokens['colors']>): this {
    this.tokens.colors = { ...this.tokens.colors, ...colors } as DesignTokens['colors'];
    return this;
  }

  withTypography(typography: Partial<DesignTokens['typography']>): this {
    this.tokens.typography = { ...this.tokens.typography, ...typography } as DesignTokens['typography'];
    return this;
  }

  withSpacing(spacing: Partial<DesignTokens['spacing']>): this {
    this.tokens.spacing = { ...this.tokens.spacing, ...spacing } as DesignTokens['spacing'];
    return this;
  }

  build(): DesignTokens {
    return this.tokens;
  }

  static create(): ThemeBuilder {
    return new ThemeBuilder();
  }
}