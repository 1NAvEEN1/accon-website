import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

import BackGroundImage from "../../assets/Home/HomeBG.jpg";

const Home1 = () => {
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
        height: {md:"65vh", xs:"80vh"},
        maxHeight: 1080,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          height: "100%",
          background:
            "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1))",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid container height={"100%"} maxWidth={1800} pt={10}>
          <Grid item xs={12} md={5}></Grid>
          <Grid
            item
            xs={12}
            md={7}
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
                component="h1"
                sx={{
                  fontWeight: "bold",
                  color: "primary.main",
                  letterSpacing: 6,
                }}
              >
                ACCON
              </Typography>
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontWeight: "bold",
                  color: "#FFFFFF",
                  mt: { sm: -2, xs: -1.5 },
                  letterSpacing: 6,
                }}
              >
                ENGINEERING
              </Typography>
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  fontWeight: "bold",
                  display: "inline-block",
                  letterSpacing: 3.7,
                  lineHeight: 1.2,
                }}
              >
                <span style={{ color: "#ec8032" }}>BUILDING</span>{" "}
                <span style={{ color: "#FFFFFF" }}>DREAMS,</span>{" "}
                <span style={{ color: "#ec8032" }}>CREATING</span>{" "}
                <span style={{ color: "#FFFFFF" }}>SPACES</span>
              </Typography>
              <Typography
                variant="body1"
                component="p"
                sx={{
                  marginTop: "1.5rem",
                  lineHeight: 1.8,
                  color: "#FFFFFF",
                  maxWidth: 650,
                }}
              >
                Founded on a passion for quality craftsmanship and a commitment
                to client satisfaction, ACCON Engineering has been a trusted
                leader in the construction industry for [X years]. Our team of
                skilled professionals brings expertise in residential,
                commercial, and renovation projects, ensuring that every build
                reflects our dedication to excellence. From concept to
                completion, we prioritize communication, transparency, and
                attention to detail, delivering spaces that inspire and endure.
                Discover the difference with ACCON Engineering.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default Home1;
