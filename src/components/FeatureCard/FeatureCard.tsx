import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';

interface FeatureCardProps {
  title: string;
  description: string;
  active: boolean;
  onSelectCard: () => void;
}

const FeatureCard = ({ title, description, active, onSelectCard }: FeatureCardProps) => {
  return (
    <Box
      width={316}
      pt={3.5}
      px={2.25}
      pb={2.125}
      borderRadius={10}
      sx={{
        border: '2px solid #484848',
        background: '#191919',
        transition: 'all 0.3s ease-in-out',
        borderColor: active ? '#FFC627' : '#484848'
      }}
      onClick={onSelectCard}
    >
      <Typography level="title-lg" color="primary" mb={0.5}>
        {title}
      </Typography>
      <Typography
        level="body-sm"
        sx={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          '-webkit-line-clamp': '2',
          '-webkit-box-orient': 'vertical'
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default FeatureCard;
