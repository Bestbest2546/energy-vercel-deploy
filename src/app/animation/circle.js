import "./animation.css";
import Box from "@mui/material/Box";

export default function Animation() {
  const Sizecircle = 70;
  const Animategrid = (
    <Box
      sx={{
        width: Sizecircle ,
        height: Sizecircle,
        borderRadius: "50%",
        backgroundColor: "red",
        animation: "moveLeftToRight 2s infinite alternate",
      }}
    />
  );
  return {
    Animategrid,
  };
}
