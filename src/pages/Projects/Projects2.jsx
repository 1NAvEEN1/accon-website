import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  Divider,
  Grid
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CloseIcon from "@mui/icons-material/Close";

import Rathmalana from "../../assets/Projects/Rathmalana.jpg";
import HoranaAguruwathota from "../../assets/Projects/Horana-Anguruwathota.jpg";
import HDDES from "../../assets/Projects/HDDES.jpg";
import Kottawa from "../../assets/Projects/Kottawa.jpg";

const projects = [
  {
    image: Rathmalana,
    title: "Rathmalana Airport Runway",
    text: "On State Highway 123, we’re constructing a 10-mile highway, including earthwork, paving, drainage, and signage installation. This 12-month project faces challenges such as managing traffic, environmental considerations, and meeting strict quality standards.",
    gallery: [Rathmalana, HoranaAguruwathota, HDDES, Kottawa],
  },
  {
    image: HoranaAguruwathota,
    title: "Horana–Anguruwathota Road",
    text: "In Cityville, we’re rehabilitating a 2-mile stretch of Main Street. The project involves resurfacing, pavement repairs, and new road markings over 6 months. Challenges include minimizing disruptions to local businesses and residents, and working around underground utilities.",
    gallery: [HoranaAguruwathota, Rathmalana, HDDES, Kottawa],
  },
  {
    image: HDDES,
    title: "HDDES Extracts Industrial Zone",
    text: "At an industrial park, we’re building a new access road to improve transportation. The project covers grading, paving, and drainage over 8 months. Challenges include operating in a busy industrial area and coordinating with multiple stakeholders.",
    gallery: [HDDES, Rathmalana, HoranaAguruwathota, Kottawa],
  },
  {
    image: Kottawa,
    title: "Kottawa–Piliyandala Road",
    text: "Located in the heart of Downtown Metro City, this project focuses on upgrading a busy urban intersection to improve traffic flow and safety. The work includes redesigning the intersection layout, installing new traffic signals, and enhancing pedestrian crossings.",
    gallery: [Kottawa, Rathmalana, HoranaAguruwathota, HDDES],
  },
];

const Projects2 = () => {
  AOS.init({ duration: 1000 });
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(0);

  const handleOpen = (index) => {
    setSelectedProject(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNext = () => {
    setSelectedProject((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setSelectedProject(
      (prev) => (prev - 1 + projects.length) % projects.length
    );
  };

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
      <Box sx={{ maxWidth: 1400, width: "100%", mx: "auto", mt: 3, px: 1 }}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onOpen={() => handleOpen(index)}
          />
        ))}
      </Box>

      {/* Project Details Dialog */}
      <Dialog
        open={open}
        slotProps={{
          backdrop: {
            sx: {
              background: "rgba(0,0,0,0.4)",
              backdropFilter: "blur(3px)",
            },
          },
        }}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          <Typography variant="h5" sx={{ mb: 2, mt: -1 }}>
            {projects[selectedProject].title}
          </Typography>
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", right: 10, top: 10 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <Divider />
        <DialogContent sx={{ height: {xl:500, lg:450}, overflow: "auto" }}>
          <Typography fontWeight={800}>PROJECT DURATION</Typography>
          <Typography mt={0.5}>2023 May - 2024 April</Typography>

          <Typography fontWeight={800} mt={2}>
            DETAILS
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, mt: 0.5 }}>
            {projects[selectedProject].text}
          </Typography>
          <Typography fontWeight={800} sx={{ mt: 2, mb: 1 }}>
            GALLERY
          </Typography>
          <Box sx={{ display: "flex", gap: 1, overflowX: "auto" }}>
            <Grid container spacing={1}>
              {projects[selectedProject].gallery.map((img, i) => (
                <Grid item md={4} sm={6} xs={12} key={i}>
                  <Box
                    component="img"
                    src={img}
                    alt="Project Image"
                    sx={{ width:"100%", height: 120, borderRadius: 0.5, objectFit: "cover" }}
                  />
                </Grid>
              ))}
            </Grid>
            {/* {projects[selectedProject].gallery.map((img, i) => (
              <Box
                key={i}
                component="img"
                src={img}
                alt="Project Image"
                sx={{ width: 100, height: 100, borderRadius: 2 }}
              />
            ))} */}
          </Box>
        </DialogContent>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 1,
          }}
        >
          <Button
            onClick={handlePrev}
            startIcon={<ArrowBackIosNewIcon />}
            disabled={selectedProject === 0}
          >
            Previous
          </Button>
          <Box>
            <Typography>{selectedProject + 1} of {projects.length}</Typography>
          </Box>
          <Button
            onClick={handleNext}
            endIcon={<ArrowForwardIosIcon />}
            disabled={selectedProject === projects.length - 1}
          >
            Next
          </Button>
        </Box>
      </Dialog>
    </Box>
  );
};

const ProjectCard = ({ project, onOpen }) => {
  return (
    <Box
      sx={{
        borderRadius: 2,
        display: "flex",
        alignItems: "end",
        backgroundColor: "#fff",
        backgroundImage: `url(${project.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: 340,
        width: "100%",
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
            {project.title}
          </Typography>
          <Typography mt={2} fontWeight={300} maxWidth={550}>
            {project.text}
          </Typography>
        </Box>
        <IconButton
          onClick={onOpen}
          size="large"
          sx={{
            bgcolor: "primary.main",
            ml: "auto",
            color: "white",
            "&:hover": { backgroundColor: "primary.dark" },
          }}
        >
          <ArrowForwardIosIcon fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Projects2;
