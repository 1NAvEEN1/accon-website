import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import BackGroundImage from "../../assets/Home/Home4BG.jpg";

// Import custom icons
import ExpertiseIcon from "../../assets/Home/Section4/expertise.png";
import QualityIcon from "../../assets/Home/Section4/Quality.png";
import InnovationIcon from "../../assets/Home/Section4/innovation.png";
import CustomerIcon from "../../assets/Home/Section4/customer.png";
import SafetyIcon from "../../assets/Home/Section4/safety.png";

const Home4 = () => {
  const infoCards = [
    {
      icon: ExpertiseIcon,
      title: "Expertise",
      text: "With [X years] of experience in the road construction industry, ACCON Engineering has the knowledge and expertise to deliver high-quality projects that exceed expectations.",
    },
    {
      icon: QualityIcon,
      title: "Quality Assurance",
      text: "We are committed to delivering top-notch quality in every project we undertake. From using the best materials to employing skilled professionals, we ensure that our work meets the highest standards.",
    },
    {
      icon: InnovationIcon,
      title: "Innovative Solutions",
      text: "ACCON Engineering is always at the forefront of innovation in road construction. We leverage the latest technologies and methods to deliver projects that are efficient, sustainable, and cost-effective.",
    },
    {
      icon: CustomerIcon,
      title: "Customer Satisfaction",
      text: "Our clients are at the heart of everything we do. We prioritize open communication, transparency, and responsiveness to ensure that our clients are always informed and satisfied with our work.",
    },
    {
      icon: SafetyIcon,
      title: "Safety First",
      text: "Safety is our top priority on every project. We have stringent safety protocols in place and ensure that all our workers are trained in safety best practices.",
    },
  ];

  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Box
        sx={{
          mt: 8,
          textAlign: "center",
          width: { xl: 1400, lg: 1200, md: 1000, sm: 800, xs: 600 },
          backgroundImage: `url(${BackGroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: 2,
        }}
      >
        <Box
          sx={{
            borderRadius: 2,
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))",
            display: "flex",
            height: "100%",
            width: "100%",
            padding: 2,
            flexDirection: "column",
            py: 6,
            px: {sm:4, xs: 2},
          }}
        >
          <Typography
            variant="h2"
            fontWeight={800}
            textAlign={"center"}
            color={"#fff"}
            mb={5}
          >
            WHY CHOOSE ACCON <br /> ENGINEERING?
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} lg={4}>
              <InfoCard
                icon={infoCards[0].icon}
                title={infoCards[0].title}
                text={infoCards[0].text}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <InfoCard
                icon={infoCards[1].icon}
                title={infoCards[1].title}
                text={infoCards[1].text}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <InfoCard
                icon={infoCards[2].icon}
                title={infoCards[2].title}
                text={infoCards[2].text}
              />
            </Grid>
            <Grid item xs={0} lg={2}></Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <InfoCard
                icon={infoCards[3].icon}
                title={infoCards[3].title}
                text={infoCards[3].text}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <InfoCard
                icon={infoCards[4].icon}
                title={infoCards[4].title}
                text={infoCards[4].text}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

const InfoCard = ({ icon, title, text }) => {
  return (
    <Box
      sx={{
        p: 2,
        textAlign: "center",
        border: "2px solid #ffff",
        borderRadius: 1,
        height: "100%",
      }}
    >
      <Box display={"flex"} justifyContent={"center"}>
        <Box
          component="img"
          src={icon}
          alt={`${title} icon - Accon Engineering commitment to ${title.toLowerCase()}`}
          sx={{
            mb: 0.5,
          }}
        />
      </Box>

      <Typography variant="h6" fontWeight={600} color={"#ffff"} mb={1}>
        {title}
      </Typography>
      <Typography color={"#ffff"}>{text}</Typography>
    </Box>
  );
};

export default Home4;
