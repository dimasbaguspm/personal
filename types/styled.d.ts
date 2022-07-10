import 'styled-components';

declare module 'styled-components' {
  export interface MyAwesomeTheme {
    colors: {
      primary: ColorAwesomeTheme;
      secondary: ColorAwesomeTheme;
      dark: ColorAwesomeTheme;
      white: ColorAwesomeTheme;
      success: ColorAwesomeTheme;
    };
  }

  export interface ColorAwesomeTheme {
    main: string;
    light?: string;
    dark?: string;
  }
}
