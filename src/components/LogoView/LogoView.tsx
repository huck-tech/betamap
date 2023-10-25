import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import { ReactComponent as LogoBetaLand } from '../../assets/svgs/betaland-logo.svg';

const LogoView = () => {
  return (
    <Box minWidth={364}>
      <LogoBetaLand />
      <Typography level="body-md">
        An interactive platform for ASU’s AI beta and proof of concept applications.
      </Typography>
    </Box>
  );
};

export default LogoView;
