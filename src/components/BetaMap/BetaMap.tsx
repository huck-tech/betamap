import { useState } from 'react';
import Box from '@mui/joy/Box';
import Tooltip from '@mui/joy/Tooltip';
import Typography from '@mui/joy/Typography';
import ImgBetaMap from '../../assets/images/betamap.jpg';

const BetaMap = () => {
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [showPopup, setShowPopup] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = (event: React.MouseEvent) => {
    const x = event.clientX;
    const y = event.clientY;
    setShowTooltip(false);

    setClickPosition({ x, y });
    setTimeout(() => {
      setShowPopup(true);
    }, 300);
  };

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
        onClick={handleClick}
      >
        {showPopup && (
          <Tooltip
            open={showTooltip}
            placement="top"
            sx={{
              boxShadow: '40px 20px 10px #0000006E',
              border: '2px solid #747474',
              background: '#191919'
            }}
            followCursor
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
            <div
              id="map-selector"
              onMouseMove={() => setShowTooltip(true)}
              style={{
                position: 'absolute',
                width: '180px',
                height: '90px',
                top: clickPosition.y - 45,
                left: clickPosition.x - 90,
                borderRadius: '50%',
                border: '3px solid #FFFFFF',
                background: '#00A3E0 0% 0% no-repeat padding-box',
                mixBlendMode: 'soft-light'
              }}
            />
          </Tooltip>
        )}
      </Box>
    </Box>
  );
};

export default BetaMap;
