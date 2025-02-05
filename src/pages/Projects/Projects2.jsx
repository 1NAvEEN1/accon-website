import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import Rathmalana from "../../assets/Projects/Rathmalana.jpg";
import HoranaAguruwathota from "../../assets/Projects/Horana-Anguruwathota.jpg";
import HDDES from "../../assets/Projects/HDDES.jpg";
import Kottawa from "../../assets/Projects/Kottawa.jpg";

const projects = [
  {
    image: Rathmalana,
    title: "Rathmalana Airport Runway",
    text: "On State Highway 123, we’re constructing a 10-mile highway, including earthwork, paving, drainage, and signage installation. This 12-month project faces challenges such as managing traffic, environmental considerations, and meeting strict quality standards.",
  },
  {
    image: HoranaAguruwathota,
    title: "Horana–Anguruwathota Road",
    text: "In Cityville, we’re rehabilitating a 2-mile stretch of Main Street. The project involves resurfacing, pavement repairs, and new road markings over 6 months. Challenges include minimizing disruptions to local businesses and residents, and working around underground utilities.",
  },
  {
    image: HDDES,
    title: "HDDES Extracts Industrial Zone",
    text: "At an industrial park, we’re building a new access road to improve transportation. The project covers grading, paving, and drainage over 8 months. Challenges include operating in a busy industrial area and coordinating with multiple stakeholders.",
  },
  {
    image: Kottawa,
    title: "Kottawa–Piliyandala Road",
    text: "Located in the heart of Downtown Metro City, this project focuses on upgrading a busy urban intersection to improve traffic flow and safety. The work includes redesigning the intersection layout, installing new traffic signals, and enhancing pedestrian crossings.",
  },
];

const Projects2 = () => {
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
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            text={project.text}
          />
        ))}
      </Box>
    </Box>
  );
};

const ProjectCard = ({ image, title, text }) => {
  return (
    <Box
      sx={{
        borderRadius: 2,
        display: "flex",
        alignItems: "end",
        backgroundColor: "#fff",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: 340,
        width: "auto%",

        // mx: "auto",
        mb: 2.5,
      }}
    >
      <Box
        sx={{
          borderRadius: 2,
          background:
            "linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))",
          display: "flex",
          alignItems: "center",
          height: "100%",
          width: "100%",
          padding: 4,
          px: 5,
        }}
      >
        <Box color={"#fff"} mb={1}>
          <Typography variant="h6" fontWeight={600} mt={2}>
            {title}
          </Typography>
          <Typography mt={2} fontWeight={300} maxWidth={550}>
            {text}
          </Typography>
        </Box>
        <IconButton
          size="large"
          sx={{
            bgcolor: "primary.main",
            ml: "auto",
            color: "white",
            "&:hover, &.Mui-focusVisible": { backgroundColor: "primary.dark" },
          }}
        >
          <ArrowForwardIosIcon fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Projects2;
