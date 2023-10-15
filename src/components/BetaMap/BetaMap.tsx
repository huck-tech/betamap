import Box from "@mui/joy/Box";
import ImgBetaMap from "../../assets/images/betamap.jpg";

const BetaMap = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: 0,
        paddingTop: "56.25%",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${ImgBetaMap})`,
        }}
      />
    </Box>
  );
};

export default BetaMap;
