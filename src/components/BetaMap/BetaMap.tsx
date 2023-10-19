import { useState } from 'react';
import Box from '@mui/joy/Box';
import Tooltip from '@mui/joy/Tooltip';
import Typography from '@mui/joy/Typography';
import ImgBetaMap from '../../assets/images/betamap.jpg';
import useScreenSize from '../../hooks/use-screen-size';
import ImgGem1 from '../../assets/images/gem1.png';
import ImgGem2 from '../../assets/images/gem2.png';
import ImgGem3 from '../../assets/images/gem3.png';
import ImgGem4 from '../../assets/images/gem4.png';
import ImgGem5 from '../../assets/images/gem5.png';

const MOCK_PLACES = [
  { x: 1288, y: 550, icon: ImgGem1 },
  { x: 552, y: 560, icon: ImgGem2 },
  { x: 861, y: 363, icon: ImgGem3 },
  { x: 718, y: 711, icon: ImgGem4 },
  { x: 1072, y: 548, icon: ImgGem5 }
];

const BetaMap = () => {
  const screenSize = useScreenSize();
  const [activeGem, setActiveGem] = useState<number | null>(null);
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
          <Tooltip
            key={idx}
            open={activeGem === idx}
            placement="top"
            sx={{
              boxShadow: '40px 20px 10px #0000006E',
              border: '2px solid #747474',
              background: '#191919'
            }}
            enterDelay={100}
            title={
              <Box p={1}>
                <Typography level="h4" textColor="#fff" fontWeight={700} fontSize={18}>
                  Crowbot
                </Typography>
                <Box maxWidth={410} color="#BFBFBF" fontSize={14} lineHeight="24px">
                  Crowbot is an AI model trained on ASU President Dr. Michael Crow’s numerous insights and writings, It
                  provide information and summarizes key perspectives from Dr. Crow on topics related to higher
                  education, innovation, technology and leadership.
                </Box>
              </Box>
            }
            arrow
          >
            {activeGem === idx ? (
              <div
                id="map-selector"
                style={{
                  position: 'absolute',
                  width: 180 * zoomRate,
                  height: 90 * zoomRate,
                  top: (item.y - 45) * zoomRate,
                  left: (item.x - 90) * zoomRate,
                  borderRadius: '50%',
                  border: '3px solid #FFFFFF',
                  background: '#00A3E0 0% 0% no-repeat padding-box',
                  mixBlendMode: 'soft-light'
                }}
              />
            ) : (
              <img
                src={item.icon}
                style={{
                  position: 'absolute',
                  width: 40 * zoomRate,
                  height: 80 * zoomRate,
                  top: (item.y - 40) * zoomRate,
                  left: (item.x - 20) * zoomRate
                }}
                className="gem-icon"
                onClick={() => setActiveGem(idx)}
              />
            )}
          </Tooltip>
        ))}
      </Box>
    </Box>
  );
};

export default BetaMap;
