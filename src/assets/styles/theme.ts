import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    dark: '#9541FA',
    lighter: '#A56BFF',
    light: '#1B1B1B',
    blue: '#38EAE9',
    grey: '#434343',
    white: '#FFFFFF',
    black: '#000000',
    error: '#FF0000',

  },
  fontSize: {
    s: '0.875rem',
    ms: '1rem',
    m: '1.125rem',
    ml: '1.5rem',
    l: '2rem',
  },
  fontWeight: {
    400: '400',
    600: '600',
  },
  padding: {
    s: '5px',
    m: '10px',
    l: '20px',
  },
  margin: {
    s: '5px',
    m: '10px',
    l: '20px',
  },
  borderRadius: '5px',
};

export { theme };
