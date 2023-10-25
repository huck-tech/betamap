import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  cssVarPrefix: 'asu',
  colorSchemes: {
    light: {
      palette: {}
    },
    dark: {
      palette: {
        primary: {
          '50': '#fff3e0',
          '100': '#ffe0b2',
          '200': '#ffcc80',
          '300': '#ffb74d',
          '400': '#ffa726',
          '500': '#ff9800',
          '600': '#fb8c00',
          '700': '#f57c00',
          '800': '#ef6c00',
          '900': '#e65100'
        },
        common: {
          black: '#191919'
        }
      }
    }
  },
  fontFamily: {
    display: 'Arial, Helvetica, sans-serif',
    body: 'Arial, Helvetica, sans-serif'
  }
});

export default theme;
