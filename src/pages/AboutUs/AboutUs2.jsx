import React from "react";
import { Box, Typography, IconButton, Grid } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs2 = () => {
  AOS.init({ duration: 1000 });

  return (
    <Box
      sx={{
        // minHeight: "100svh",
        mt: 5,
        mb: 5,
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box sx={{ maxWidth: 1400, width: "100%", mx: "auto", mt: 3, px: 1 }}>
        <Grid container>
          <Grid
            item
            xs={0}
            md={5}
            display={{ xs: "none", md: "block" }}
            height={"100%"}
          >
            <Box
              sx={{ bgcolor: "lightgrey", height: "100%", width: "100%" }}
            ></Box>
          </Grid>
          <Grid item md={7}>
            <Typography variant="h2">Our Mission</Typography>
            <Typography mb={5} mt={1}>
              Our mission at ACCON Engineering is to deliver exceptional road
              construction services that exceed our clients' expectations. We
              strive to build long-lasting relationships with our clients based
              on trust, integrity, and quality workmanship.
            </Typography>

            <Typography variant="h2">Our Values</Typography>
            <Typography mb={5} mt={1.5}>
              <strong> Integrity:</strong> We conduct our business with honesty,
              transparency, and fairness.
              <br />
              <br />
              <strong> Quality:</strong> We are committed to delivering the
              highest standards of quality in everything we do. <br />
              <br />
              <strong> Innovation:</strong> We continuously seek new ways to
              improve our processes and deliver better results for our clients.{" "}
              <br />
              <br />
              <strong> Customer Focus:</strong> We prioritize the needs and
              satisfaction of our clients, ensuring that their goals are met and
              exceeded.
            </Typography>

            <Typography variant="h2">Our Team</Typography>
            <Typography mb={5} mt={1}>
              At ACCON Engineering, we are proud to have a team of skilled
              professionals who are dedicated to delivering excellence in every
              project we undertake. Our team includes experienced engineers,
              project managers, and construction workers who work together to
              ensure the success of our projects.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AboutUs2;
