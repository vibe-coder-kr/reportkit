export interface DesignTokens {
  // 색상 팔레트
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: {
      primary: string;
      secondary: string;
      muted: string;
      inverted: string;
    };
    border: string;
    accent: {
      success: string;
      warning: string;
      error: string;
      info: string;
    };
  };

  // 타이포그래피
  typography: {
    fontFamily: string;
    fontSize: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
    };
    fontWeight: {
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
    };
    lineHeight: {
      tight: number;
      normal: number;
      relaxed: number;
    };
  };

  // 간격
  spacing: {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    6: string;
    8: string;
    12: string;
    16: string;
  };

  // 테두리
  borders: {
    radius: {
      sm: string;
      md: string;
      lg: string;
    };
    width: {
      thin: string;
      normal: string;
      thick: string;
    };
  };

  // 그림자
  shadows: {
    sm: string;
    md: string;
    lg: string;
  };
}