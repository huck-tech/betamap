import BetaMap from './components/BetaMap/BetaMap';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import theme, { globalStyles } from './styles/theme';

function App() {
  return (
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      {globalStyles}
      <BetaMap />
    </CssVarsProvider>
  );
}

export default App;
