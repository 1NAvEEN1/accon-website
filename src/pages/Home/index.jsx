import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import BackGroundImage from "../../assets/Home/HomeBG.png";

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${BackGroundImage})`,
          backgroundSize: "100% auto", // Set to cover the screen width and adjust height
          backgroundRepeat: "no-repeat",
          minHeight: 900,
          height: "100vh",
          maxHeight: 1080,
          overflow: "hidden",
          bgcolor: "#222222",
        }}
        pt={8}
      ></Box>
    </Box>
  );
};

export default Home;
