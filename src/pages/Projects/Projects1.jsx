import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

import BackGroundImage from "../../assets/Projects/ProjectsBG.jpg";

const Projects1 = () => {
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
                Projects
              </Typography>

              <Typography
                variant="body1"
                component="p"
                sx={{
                  marginTop: "1.5rem",
                  lineHeight: 1.8,
                  color: "#FFFFFF",
                  maxWidth: 820,
                }}
                textAlign={"center"}
              >
                ACCON Engineering offers a comprehensive suite of services
                tailored to meet all your road construction and infrastructure
                needs. From expert road construction and concrete supply to
                machinery rental and maintenance, our team is committed to
                delivering quality results that exceed expectations. With a
                focus on innovation, sustainability, and customer satisfaction,
                we are your trusted partner in building a better tomorrow.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default Projects1;
