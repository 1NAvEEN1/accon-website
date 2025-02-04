import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

// Import images
import HDDES from "../../assets/Home/Projects/HDDES.jpg";
import HoranaAguruwathota from "../../assets/Home/Projects/Horana-Aguruwathota.jpg";
import KottawaPiliyandala from "../../assets/Home/Projects/Kottawa-Piliyandala.jpg";
import Rathmalana from "../../assets/Home/Projects/Rathmalana.jpg";

const Home3 = () => {
  const navigate = useNavigate();
  const projects = [
    {
      image: Rathmalana,
      title: "Rathmalana Airport Runway",
      text: "Rehabilitation of a 2-mile stretch of local road, including resurfacing, pavement repairs, and new road markings.",
    },
    {
      image: HoranaAguruwathota,
      title: "Horana–Aguruwathota Road",
      text: "Rehabilitation of a 2-mile stretch of local road, including resurfacing, pavement repairs, and new road markings.",
    },
    {
      image: HDDES,
      title: "HDDES Extracts Industrial Zone",
      text: "Rehabilitation of a 2-mile stretch of local road, including resurfacing, pavement repairs, and new road markings.",
    },
    {
      image: KottawaPiliyandala,
      title: "Kottawa–Piliyandala Road",
      text: "Rehabilitation of a 2-mile stretch of local road, including resurfacing, pavement repairs, and new road markings.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        mt: 8,
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: { xl: 1340, lg: 1200, md: 900, sm: 600, xs: 350 } }}>
        <Typography variant="h2" fontWeight={800} color={"#131212"}>
          PROJECTS
        </Typography>
        <Box mt={5} px={2} width={"100%"}>
          <Slider {...settings}>
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                image={project.image}
                title={project.title}
                text={project.text}
              />
            ))}
          </Slider>
        </Box>
        <Box display={"flex"} justifyContent={"center"} mt={5}>
          <Button
            variant="outlined"
            sx={{ px: 4, py: 1 }}
            onClick={() => navigate("/projects")}
          >
            See More
          </Button>
        </Box>
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
        width: 280,
        mx: "auto",
      }}
    >
      <Box
        sx={{
          borderRadius: 2,
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))",
          display: "flex",
          alignItems: "end",
          height: "100%",
          width: "100%",
          padding: 2,
        }}
      >
        <Box color={"#fff"} mb={1}>
          <Typography fontWeight={600} mt={2}>
            {title}
          </Typography>
          <Typography mt={2} fontWeight={300}>
            {text}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Home3;
