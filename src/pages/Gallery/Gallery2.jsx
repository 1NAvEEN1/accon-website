import React from "react";
import { Box, Grid } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

import Rathmalana from "../../assets/Projects/Rathmalana.jpg";
import HoranaAguruwathota from "../../assets/Projects/Horana-Anguruwathota.jpg";
import HDDES from "../../assets/Projects/HDDES.jpg";
import Kottawa from "../../assets/Projects/Kottawa.jpg";

const images = [
  { src: Rathmalana, md: 8 },
  { src: HoranaAguruwathota, md: 4 },
  { src: HDDES, md: 6 },
  { src: Kottawa, md: 6 },
  { src: Rathmalana, md: 4 },
  { src: HoranaAguruwathota, md: 8 },
  { src: HDDES, md: 12 },
  { src: Kottawa, md: 12 },
];

const Gallery2 = () => {
  AOS.init({ duration: 1000 });

  return (
    <Box
      sx={{
        mt: 5,
        mb: 5,
        display: "flex",
        justifyContent: "center",
        width: "100%",
        px: 2,
      }}
    >
      <Grid container spacing={2} maxWidth={1500}>
        {images.map((image, index) => (
          <Grid
            key={index}
            item
            xs={12}
            md={image.md}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <Box
              component="img"
              src={image.src}
              alt={`Gallery Image ${index + 1}`}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 1.5,
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Gallery2;
