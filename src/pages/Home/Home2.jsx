import React, { useEffect } from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

import Icon1 from "../../assets/icon1.png";
import Icon2 from "../../assets/icon2.png";
import Icon3 from "../../assets/icon3.png";

import ServiceIcon1 from "../../assets/serviceIcon1.png";
import ServiceIcon2 from "../../assets/serviceIcon2.png";

const Home2 = () => {
  AOS.init({ duration: 1000 });

  return (
    <Box
      sx={{
        // minHeight: "100svh",
      }}
    >
      <Box display={"flex"} justifyContent={"center"} alignItems={"end"} mt={2}>
        <Grid
          data-aos="fade-down"
          data-aos-anchor-placement="top-bottom"
          container
          spacing={2}
          sx={{
            maxWidth: { lg: 900, xs: 350 },
            backgroundColor: "rgb(255, 255, 255, 1)",
            borderRadius: 1,
            boxShadow: 5,
            p: 5,
            ml: 0,
          }}
        >
          <Grid
            item
            xs={12}
            lg={4}
            // mt={{ xs: 0, lg: -2 }}
            data-aos="zoom-in"
            data-aos-anchor-placement="center-bottom"
          >
            <Box display={"flex"} justifyContent={"center"}>
              <Box component={"img"} src={Icon1} />
            </Box>
            <Typography
              variant="h6"
              fontWeight={600}
              textAlign={"center"}
              color={"black"}
            >
              Secure Living
            </Typography>
            <Typography textAlign={"center"}>
              Our make bearing also multiply. Fourth open, were.After blessed
              which sea, over fowl doesn't.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            lg={4}
            mt={{ xs: 3, lg: -2 }}
            data-aos="zoom-in"
            data-aos-anchor-placement="top-bottom"
          >
            <Box display={"flex"} justifyContent={"center"}>
              <Box component={"img"} src={Icon2} />
            </Box>

            <Typography
              variant="h6"
              fontWeight={600}
              textAlign={"center"}
              color={"black"}
            >
              Accurate Build
            </Typography>
            <Typography textAlign={"center"}>
              Our make bearing also multiply. Fourth open, were.After blessed
              which sea, over fowl doesn't.
            </Typography>
          </Grid>
          <Grid item xs={12} lg={4} mt={{ xs: 3, lg: -2 }} data-aos="zoom-in">
            <Box display={"flex"} justifyContent={"center"}>
              <Box component={"img"} src={Icon3} width={64} />
            </Box>

            <Typography
              variant="h6"
              fontWeight={600}
              textAlign={"center"}
              color={"black"}
            >
              Secure Living
            </Typography>
            <Typography textAlign={"center"}>
              Our make bearing also multiply. Fourth open, were.After blessed
              which sea, over fowl doesn't.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box mt={5}>
        <Typography variant="h3" fontWeight={700} textAlign={"center"}>
          <span style={{ color: "#e05c44" }}>OUR</span> SERVICES
        </Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"} mt={3}>
        <Grid
          container
          sx={{
            width: {
              lg: 1100,
            },
          }}
        >
          <Grid item xs={12} lg={4} display={"flex"} justifyContent={"center"}>
            <ServiceCard
              icon={ServiceIcon1}
              title={"ROAD CONSTRUCTION"}
              text={
                " Litora leo senectus suscipit phasellu a lectus. mpot ullamcorper augue. Pellentesque. Commodo vehiculavelia."
              }
            />
          </Grid>
          <Grid item xs={12} lg={4} display={"flex"} justifyContent={"center"}>
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
        </Grid>
      </Box>
      <Box mt={5}></Box>
    </Box>
  );
};

const ServiceCard = ({ icon, title, text }) => {
  return (
    <Grid
      container
      spacing={1}
      width={320}
      sx={{ boxShadow: 3, p: 2, pt: 0, mt: { xs: 2, lg: 0 } }}
      data-aos="zoom-in"
      data-aos-anchor-placement="center-bottom"
    >
      <Grid item xs={3} display={"flex"} alignItems={"center"}>
        <Box component={"img"} src={icon} width={64} />
      </Grid>
      <Grid item xs={9} display={"flex"} alignItems={"center"}>
        <Typography variant="h6" fontWeight={600}>
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12} mt={-1}>
        <Typography>{text}</Typography>
      </Grid>
    </Grid>
  );
};

export default Home2;
