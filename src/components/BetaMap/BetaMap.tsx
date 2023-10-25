import { useState } from 'react';
import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Tooltip from '@mui/joy/Tooltip';
import { styled } from '@mui/joy';
import LogoView from '../LogoView';
import FeatureCard from '../FeatureCard';
import ImgBetaMap from '../../assets/images/betamap.jpg';
import useScreenSize from '../../hooks/use-screen-size';
import ImgGem5 from '../../assets/images/gem5.png';
import { CONTENT } from './constant';

const Image = styled('img')({
  width: 80,
  aspectRatio: 240 / 355,
  transition: 'all 0.5s ease-in-out',
  '&:hover': {
    filter: 'drop-shadow(0 0 2px #fff)'
  }
});

const BetaMap = () => {
  const screenSize = useScreenSize();
  const [activeGem, setActiveGem] = useState<number | null>(null);
  const zoomRate = screenSize.width / 1920;

  return (
    <Box
      sx={{
        backgroundImage: `url(${ImgBetaMap})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center -100px',
        px: 9,
        pb: 9
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: 0,
          paddingTop: '50%',
          position: 'relative'
        }}
      >
        {CONTENT.map((item, idx) => (
          <Stack
            key={idx}
            alignItems="center"
            sx={{ position: 'absolute', top: item.y * zoomRate, left: item.x * zoomRate }}
            onClick={() => setActiveGem(idx)}
          >
            <Typography
              level="title-lg"
              textColor={idx === activeGem ? '#FFFFFF' : '#FFC627'}
              color="primary"
              sx={(theme) => ({
                backgroundColor: theme.palette.background.body,
                mb: 1,
                px: 2,
                py: 1,
                lineHeight: '17px',
                borderRadius: 10
              })}
            >
              {item.name}
            </Typography>
            <Tooltip
              title={
                <Box width={400} p={2}>
                  <Typography level="title-lg" textColor="#ffffff" letterSpacing="-0.27px">
                    {item.name}
                  </Typography>
                  <Typography level="body-sm">{item.mediumText}</Typography>
                </Box>
              }
              open={idx === activeGem}
              arrow
              variant="outlined"
              placement="top"
              size="lg"
              sx={{
                boxShadow: 'none',
                borderWidth: 2,
                borderColor: '#FFC627',
                borderRadius: 10,
                '--Tooltip-arrowSize': '20px',
                '--variant-borderWidth': '2px',
                '--variant-outlinedBorder': '#FFC627'
              }}
            >
              <Image src={ImgGem5} alt={item.name} />
            </Tooltip>
          </Stack>
        ))}
      </Box>
      <Stack direction="row" justifyContent="space-between" columnGap={2}>
        <LogoView />
        <Stack direction="row" flexWrap="wrap" gap={2}>
          {CONTENT.map((item, idx) => (
            <FeatureCard
              key={item.name}
              title={item.name}
              description={item.shortText}
              active={idx === activeGem}
              onSelectCard={() => setActiveGem(idx)}
            />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default BetaMap;
