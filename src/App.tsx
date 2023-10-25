import BetaMap from './components/BetaMap/BetaMap';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import theme from './styles/theme';

function App() {
  return (
    <CssVarsProvider defaultMode="dark" theme={theme}>
      <CssBaseline />
      <BetaMap />
    </CssVarsProvider>
  );
}

export default App;
