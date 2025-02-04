import React, { useEffect } from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

import Icon1 from "../../assets/icon1.png";
import Icon2 from "../../assets/icon2.png";
import Icon3 from "../../assets/icon3.png";

import ServiceIcon1 from "../../assets/serviceIcon1.png";
import ServiceIcon2 from "../../assets/serviceIcon2.png";
import { useNavigate } from "react-router-dom";

const Home2 = () => {
  AOS.init({ duration: 1000 });
const navigate = useNavigate();
  return (
    <Box
      sx={{
        // minHeight: "100svh",
        mt: 5,
      }}
    >
      <Typography
        variant="h2"
        fontWeight={800}
        textAlign={"center"}
        color={"#131212"}
      >
        WHAT WE OFFER
      </Typography>
      <Box display={"flex"} justifyContent={"center"} mt={3}>
        <Grid
          container
          sx={{
            width: {
              lg: 1300,
              md: 900,
              sm: 600,
              // xs: 300,
            },
            px: 1,
          }}
          spacing={2}
        >
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            display={"flex"}
            justifyContent={"center"}
          >
            <ServiceCard
              icon={ServiceIcon1}
              title={"ROAD CONSTRUCTION"}
              text={
                " Litora leo senectus suscipit phasellu a lectus. mpot ullamcorper augue. Pellentesque. Commodo vehiculavelia."
              }
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            display={"flex"}
            justifyContent={"center"}
          >
            <ServiceCard
              icon={ServiceIcon2}
              title={"CONCRETE MIXTURE"}
              text={
                " Litora leo senectus suscipit phasellu a lectus. mpot ullamcorper augue. Pellentesque. Commodo vehiculavelia."
              }
            />
          </Grid>
          <Grid item xs={12} lg={4} display={"flex"} justifyContent={"center"}>
            <ServiceCard
              icon={ServiceIcon1}
              title={"ROAD CONSTRUCTION"}
              text={
                " Litora leo senectus suscipit phasellu a lectus. mpot ullamcorper augue. Pellentesque. Commodo vehiculavelia."
              }
            />
          </Grid>
          <Grid item xs={12} display={"flex"} justifyContent={"center"} mt={2}>
            <Button variant="outlined" sx={{ px: 4, py: 1 }} onClick={() => navigate("/services")}>
              See More
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const ServiceCard = ({ icon, title, text }) => {
  return (
    <Grid
      container
      // spacing={0}
      width={400}
      sx={{
        border: "2px solid #EC8032",
        borderRadius: 1,
        p: 2,
        pt: 0,
        mt: { xs: 2, lg: 0 },
      }}
      boar
      data-aos="zoom-in"
      data-aos-anchor-placement="center-bottom"
    >
      <Grid
        item
        xs={12}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box component={"img"} src={icon} width={64} mt={0.5} />
      </Grid>
      <Grid
        item
        xs={12}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        mt={0.5}
      >
        <Typography color={"primary.main"} fontWeight={700}>
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12} mt={1} mb={1}>
        <Typography textAlign={"center"}>{text}</Typography>
      </Grid>
    </Grid>
  );
};

export default Home2;
