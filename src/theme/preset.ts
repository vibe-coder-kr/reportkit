import { DesignTokens } from './tokens';

export const mono: DesignTokens = {
  colors: {
    primary: '#000000',
    secondary: '#000000',
    background: '#ffffff',
    surface: '#ffffff',
    text: {
      primary: '#000000',
      secondary: '#404040',
      muted: '#808080',
      inverted: '#ffffff',
    },
    border: '#cccccc',
    accent: {
      success: '#000000',
      warning: '#000000',
      error: '#000000',
      info: '#000000',
    },
  },

  typography: {
    fontFamily: `'Calibri', 'Arial', 'Helvetica', sans-serif`,
    fontSize: {
      xs: '0.75rem',
      sm: '0.8125rem',
      base: '0.9375rem',
      lg: '1rem',
      xl: '1.125rem',
      '2xl': '1.375rem',
      '3xl': '1.75rem',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.4,
      normal: 1.5,
      relaxed: 1.6,
    },
  },

  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    6: '1.5rem',
    8: '2rem',
    12: '3rem',
    16: '4rem',
  },

  borders: {
    radius: {
      sm: '0',
      md: '0',
      lg: '0',
    },
    width: {
      thin: '1px',
      normal: '1px',
      thick: '2px',
    },
  },

  shadows: {
    sm: 'none',
    md: 'none',
    lg: 'none',
  },
};

export const office: DesignTokens = {
  colors: {
    primary: '#0052CC',
    secondary: '#42526E',
    background: '#F4F5F7',
    surface: '#FFFFFF',
    text: {
      primary: '#172B4D',
      secondary: '#42526E',
      muted: '#6B778C',
      inverted: '#FFFFFF',
    },
    border: '#DFE1E6',
    accent: {
      success: '#36B37E',
      warning: '#FFAB00',
      error: '#FF5630',
      info: '#00B8D9',
    },
  },

  typography: {
    fontFamily: `'Pretendard Variable', 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`,
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.5,
      normal: 1.6,
      relaxed: 1.8,
    },
  },

  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    6: '1.5rem',
    8: '2rem',
    12: '3rem',
    16: '4rem',
  },

  borders: {
    radius: {
      sm: '2px',
      md: '4px',
      lg: '8px',
    },
    width: {
      thin: '1px',
      normal: '1px',
      thick: '2px',
    },
  },

  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  },
};

export const vivid: DesignTokens = {
  colors: {
    primary: '#FF6B35',
    secondary: '#6A4C93',
    background: '#FFF8F0',
    surface: '#FFFFFF',
    text: {
      primary: '#2D3047',
      secondary: '#5A5D7A',
      muted: '#8B8C9F',
      inverted: '#FFFFFF',
    },
    border: '#E8D7C9',
    accent: {
      success: '#4CB944',
      warning: '#FFB347',
      error: '#FF3A20',
      info: '#3E92CC',
    },
  },

  typography: {
    fontFamily: `'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`,
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.4,
      normal: 1.55,
      relaxed: 1.7,
    },
  },

  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    6: '1.5rem',
    8: '2rem',
    12: '3rem',
    16: '4rem',
  },

  borders: {
    radius: {
      sm: '4px',
      md: '8px',
      lg: '12px',
    },
    width: {
      thin: '1px',
      normal: '2px',
      thick: '3px',
    },
  },

  shadows: {
    sm: '0 2px 4px rgba(255, 107, 53, 0.1)',
    md: '0 4px 8px rgba(255, 107, 53, 0.15), 0 2px 4px rgba(106, 76, 147, 0.1)',
    lg: '0 10px 20px rgba(255, 107, 53, 0.15), 0 4px 8px rgba(106, 76, 147, 0.12)',
  },
};

export const dark: DesignTokens = {
  colors: {
    primary: '#4C9AFF',
    secondary: '#9FB6D8',
    background: '#0F1115',
    surface: '#161A22',
    text: {
      primary: '#E6EAF0',
      secondary: '#B8C0CC',
      muted: '#8A94A6',
      inverted: '#0F1115',
    },
    border: '#262B36',
    accent: {
      success: '#3DDC97',
      warning: '#FFB020',
      error: '#FF6B6B',
      info: '#4CC3FF',
    },
  },

  typography: {
    fontFamily: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`,
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.45,
      normal: 1.6,
      relaxed: 1.75,
    },
  },

  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    6: '1.5rem',
    8: '2rem',
    12: '3rem',
    16: '4rem',
  },

  borders: {
    radius: {
      sm: '4px',
      md: '6px',
      lg: '10px',
    },
    width: {
      thin: '1px',
      normal: '1px',
      thick: '2px',
    },
  },

  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.4)',
    md: '0 4px 8px rgba(0, 0, 0, 0.45)',
    lg: '0 12px 24px rgba(0, 0, 0, 0.5)',
  },
};

export const terminal: DesignTokens = {
  colors: {
    primary: '#00FF00',
    secondary: '#003B00',
    background: '#000000',
    surface: '#0D0D0D',
    text: {
      primary: '#00FF00',
      secondary: '#00CC00',
      muted: '#006600',
      inverted: '#000000',
    },
    border: '#00FF00',
    accent: {
      success: '#00FF00',
      warning: '#FFFF00',
      error: '#FF0000',
      info: '#00FFFF',
    },
  },

  typography: {
    fontFamily: `'Fira Code', 'JetBrains Mono', 'Source Code Pro', 'Ubuntu Mono', 'Courier New', monospace`,
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.4,
      normal: 1.6,
      relaxed: 1.8,
    },
  },

  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    6: '1.5rem',
    8: '2rem',
    12: '3rem',
    16: '4rem',
  },

  borders: {
    radius: {
      sm: '0',
      md: '0',
      lg: '0',
    },
    width: {
      thin: '1px',
      normal: '1px',
      thick: '2px',
    },
  },

  shadows: {
    sm: '0 0 5px rgba(0, 255, 0, 0.2)',
    md: '0 0 10px rgba(0, 255, 0, 0.3)',
    lg: '0 0 20px rgba(0, 255, 0, 0.4)',
  },
};
