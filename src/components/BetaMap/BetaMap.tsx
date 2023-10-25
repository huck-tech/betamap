// import { useState } from 'react';
import Box from '@mui/joy/Box';
import ImgBetaMap from '../../assets/images/betamap.jpg';
import useScreenSize from '../../hooks/use-screen-size';
import ImgGem5 from '../../assets/images/gem5.png';
import { styled } from '@mui/joy';

const Image = styled('img')({
  position: 'absolute',
  width: 80,
  aspectRatio: 240 / 355,
  '&:hover': {
    filter: 'drop-shadow(0 0 2px #fff)'
  }
});

const MOCK_PLACES = [
  { x: 1288, y: 550, icon: ImgGem5 },
  { x: 552, y: 560, icon: ImgGem5 },
  { x: 861, y: 363, icon: ImgGem5 },
  { x: 718, y: 711, icon: ImgGem5 },
  { x: 1072, y: 548, icon: ImgGem5 }
];

const BetaMap = () => {
  const screenSize = useScreenSize();
  // const [activeGem, setActiveGem] = useState<number | null>(null);
  const zoomRate = screenSize.width / 1920;

  return (
    <Box
      sx={{
        width: '100%',
        height: 0,
        paddingTop: '56.25%',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${ImgBetaMap})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        {MOCK_PLACES.map((item, idx) => (
          <Image
            key={idx}
            src={item.icon}
            style={{
              top: item.y * zoomRate,
              left: item.x * zoomRate
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default BetaMap;
