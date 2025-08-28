import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

import Service1 from "../../assets/Services/service1.jpg";
import Service2 from "../../assets/Services/service3.jpg";
import Service3 from "../../assets/Services/service3.jpg";
import Service4 from "../../assets/Services/service4.jpg";
import Service5 from "../../assets/Services/service4.jpg";

const Services2 = () => {
  AOS.init({ duration: 1000 });

  return (
    <Box
      sx={{
        // minHeight: "100svh",
        mt: 5,
        mb: 5,
      }}
    >
      <Box display={"flex"} justifyContent={"center"} mt={3}>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{ maxWidth: 1300, mx: "auto" }}
        >
          <Grid item xs={12} sm={6} lg={4}>
            <ServiceCard
              image={Service1}
              title="Road Construction"
              text="At ACCON Engineering, we specialize in road construction services, including the construction of highways, local roads, and industrial roads. Our experienced team ensures durable roads that meet the highest quality and safety standards."
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <ServiceCard
              image={Service2}
              title="Concrete Supply"
              text="ACCON Engineering provides a wide range of high-quality concrete mixes for construction needs. Our concrete is sourced from reputable suppliers and customized to meet specific project requirements."
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <ServiceCard
              image={Service3}
              title="Machinery Supply"
              text="We offer a comprehensive range of construction machinery and equipment for rent or sale, ensuring optimal performance and safety on your construction site."
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <ServiceCard
              image={Service4}
              title="Road Maintenance"
              text="We offer comprehensive road maintenance services, including pothole repairs, resurfacing, crack sealing, and striping. We ensure your roads remain safe and functional for years."
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <ServiceCard
              image={Service5}
              title="Landscaping"
              text="Our landscaping services enhance the beauty and functionality of your outdoor spaces, transforming them into welcoming environments."
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const ServiceCard = ({ image, title, text }) => {
  return (
    <Grid
      container
      sx={{
        borderRadius: 2,
        p: 2,
        pt: 0,
        mt: { xs: 2, lg: 0 },
        bgcolor: "#F29D5F33",
        height: "100%",
        width: 400,
      }}
      // data-aos="zoom-in"
      // data-aos-anchor-placement="center-bottom"
    >
      <Grid
        item
        xs={12}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        mt={2}
      >
        <Box
          component={"img"}
          src={image}
          sx={{ borderRadius: "12px 12px 0 0" }}
          alt={`${title} - Professional ${title.toLowerCase()} services by Accon Engineering`}
          loading="lazy"
        />
      </Grid>
      <Grid
        item
        xs={12}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        mt={2}
      >
        <Typography variant="h6" fontWeight={800}>
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12} mt={1} mb={1}>
        <Typography textAlign={"center"}>{text}</Typography>
      </Grid>
    </Grid>
  );
};

export default Services2;
