import React from "react";
import { Box, Typography, IconButton, Grid, Avatar } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import UserProfileIcon from "../../assets/AboutUs/UserProfileIcon.png";
import AboutUs2Image from "../../assets/AboutUs/AboutUs2.jpg";

const AboutUs2 = () => {
  AOS.init({ duration: 1000 });

  return (
    <Box
      sx={{
        mt: 5,
        mb: 5,
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          maxWidth: 1400,
          width: "100%",
          mx: "auto",
          mt: 3,
          px: 1,
          display: "block",
        }}
      >
        <Grid container spacing={0}>
          <Grid
            item
            xs={0}
            md={5}
            display={{ xs: "none", md: "block" }}
            height={"100%"}
            width={"100%"}
            pr={5}
          >
            <Box component={"img"} src={AboutUs2Image} height={"100%"} mr={2} />
            {/* <Box
              sx={{ bgcolor: "lightgrey", height: "100%", width: "100%" }}
            ></Box> */}
          </Grid>
          <Grid item md={7} sx={{ px: { xs: 1, md: 0 } }}>
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
            <Grid container spacing={2} sx={{ width: "100%", mt: 2 }}>
              {[...Array(4)].map((_, index) => (
                <Grid key={index} item xs={6} sm={3} md={3}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Avatar
                      sx={{ width: 120, height: 120 }}
                      src={UserProfileIcon}
                    />
                    <Typography fontWeight={800} textAlign={"center"}>
                      Nilesha Jayanath
                    </Typography>
                    <Typography textAlign={"center"}>
                      Project Manager
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AboutUs2;
