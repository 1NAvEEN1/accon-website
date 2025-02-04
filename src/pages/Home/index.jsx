import React, { useEffect } from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

import BackGroundImage from "../../assets/Home/HomeBG.jpg";
import Icon1 from "../../assets/icon1.png";
import Icon2 from "../../assets/icon2.png";
import Icon3 from "../../assets/icon3.png";

import ServiceIcon1 from "../../assets/serviceIcon1.png";
import ServiceIcon2 from "../../assets/serviceIcon2.png";
import Home1 from "./Home1";
import Home2 from "./Home2";
import Home3 from "./Home3";
import Home4 from "./Home4";

const Home = () => {
  AOS.init({ duration: 1000 });

  return (
    <Box
      sx={{
        minHeight: "100svh",
        pb: 5,
      }}
    >
      <Home1 />
      <Home2 />
      <Home3 />
      <Home4 />
    </Box>
  );
};

export default Home;
