import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

import BackGroundImage from "../../assets/AboutUs/AboutUsBG.jpg";

const AboutUs1 = () => {
  AOS.init({ duration: 1000 });

  return (
    <Box
      sx={{
        mt: 9,
        backgroundImage: `url(${BackGroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "center",
        backgroundPositionY: "bottom",
        minHeight: 500,
        height: { md: "50vh", xs: "70vh" },
        maxHeight: 1080,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          height: "100%",
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1))",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid container height={"100%"} maxWidth={1800} pt={2}>
          <Grid
            item
            xs={12}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box
              data-aos="fade-down"
              sx={{ textAlign: "left", padding: "2rem" }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontWeight: "bold",
                  color: "primary.main",
                  letterSpacing: 6,
                }}
                textAlign={"center"}
              >
                About Us
              </Typography>

              <Typography
                variant="body1"
                component="p"
                sx={{
                  marginTop: "1.5rem",
                  lineHeight: 1.8,
                  color: "#FFFFFF",
                  maxWidth: 830,
                }}
                textAlign={"center"}
              >
                ACCON Engineering is a leading road construction company that
                has been serving clients across the region for [X years]. Our
                commitment to quality, innovation, and customer satisfaction
                sets us apart as a trusted partner for all road construction
                needs.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default AboutUs1;
