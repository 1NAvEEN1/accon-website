import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

import Rathmalana from "../../assets/Projects/Rathmalana.jpg";
import HoranaAguruwathota from "../../assets/Projects/Horana-Anguruwathota.jpg";
import HDDES from "../../assets/Projects/HDDES.jpg";
import Kottawa from "../../assets/Projects/Kottawa.jpg";


const Gallery2 = () => {
  AOS.init({ duration: 1000 });

  return (
    <Box
      sx={{
        minHeight: "100svh",
        mt: 5,
        mb: 5,
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
    
    </Box>
  );
};



export default Gallery2;
