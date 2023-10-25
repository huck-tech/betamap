import { GlobalStyles } from '@mui/joy';
import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {}
    },
    dark: {
      palette: {}
    }
  }
});

export const globalStyles = <GlobalStyles styles={{}} />;

export default theme;
