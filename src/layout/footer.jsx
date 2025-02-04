import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import LogoFooter from "../assets/LogoFooter.png";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import PrintIcon from "@mui/icons-material/Print";

import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = ({ pages }) => {
  return (
    <Box
      sx={{
        bgcolor: "#131212",
        pt: 5,
        pr: 5,
        pl: 5,
        pb: 5,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box maxWidth={1500}>
        {/* <Divider sx={{ bgcolor: "#979797", height: "2px" }} /> */}
        <Grid container>
          <Grid item xs={12} lg={3} mt={5}>
            {/* <img src={LogoFooter} /> */}
            <Box>
              <Typography color={"white"} variant="h2" textAlign={"center"}>
                ACCON
              </Typography>
              <Typography
                color={"primary.main"}
                mt={-1}
                textAlign={"center"}
                fontWeight={500}
                variant="h5"
              >
                Engineering PVT
              </Typography>
            </Box>
            <Box display={{ lg: "none", xs: "flex" }} mt={2}>
              <Contacts />
            </Box>
          </Grid>
          <Grid
            item
            lg={3}
            display={{ xs: "none", lg: "flex" }}
            justifyContent={"center"}
            mt={5}
          >
            <Grid container spacing={4} width={120}>
              {pages.map((page, key) => (
                <Grid
                  item
                  key={key}
                  xs={12}
                  sx={{
                    color: "white",
                    ":hover": {
                      cursor: "pointer",
                      color: "primary.main",
                    },
                  }}
                >
                  <Typography>{page.name}</Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid
            item
            lg={6}
            display={{ xs: "none", lg: "flex" }}
            justifyContent={"center"}
            alignItems={"center"}
            mt={1}
          >
            <Contacts />
          </Grid>
          <Grid
            item
            xs={12}
            lg={12}
            display={"flex"}
            justifyContent={{ xs: "center", sm: "end", lg: "end" }}
            alignItems={"center"}
            mt={1}
            gap={2}
            mb={3}
          >
            <Typography color={"white"}>SOCIAL MEDIA</Typography>
            <IconButton>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon
                  sx={{ color: "white", ":hover": { color: "primary.main" } }}
                  fontSize="large"
                />
              </a>
            </IconButton>
            <IconButton>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTubeIcon
                  sx={{ color: "white", ":hover": { color: "primary.main" } }}
                  fontSize="large"
                />
              </a>
            </IconButton>
            <IconButton>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon
                  sx={{ color: "white", ":hover": { color: "primary.main" } }}
                  fontSize="large"
                />
              </a>
            </IconButton>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          display={{ lg: "none", xs: "flex" }}
          justifyContent={"center"}
        >
          <Grid container spacing={2} mb={2}>
            {pages.map((page, key) => (
              <Grid
                item
                key={key}
                xs={4}
                md={2}
                sx={{
                  color: "white",
                  ":hover": {
                    cursor: "pointer",
                    color: "primary.main",
                  },
                }}
              >
                <Typography textAlign={"center"}>{page.name}</Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Divider sx={{ bgcolor: "#979797" }} />
        <Typography color={"white"} textAlign={"start"} mt={4}>
          COPYRIGHT ©2025 ACCON - POWERED BY{" "}
          <a
            href="https://github.com/1NAvEEN1"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#FE760F" }}
          >
            1NAvEEN1
          </a>
        </Typography>
      </Box>
    </Box>
  );
};

const Contacts = () => {
  return (
    <Box display={"flex"} justifyContent={"end"}>
      <Grid container color={"white"} height={180}>
        <Grid
          item
          xs={1.5}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <IconButton>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LocationOnIcon
                sx={{ color: "white", ":hover": { color: "primary.main" } }}
                fontSize="large"
              />
            </a>
          </IconButton>
        </Grid>
        <Grid
          item
          xs={10.5}
          display={"flex"}
          justifyContent={"start"}
          alignItems={"center"}
        >
          <Typography>
            345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
          </Typography>
        </Grid>
        <Grid
          item
          xs={1.5}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <IconButton>
            <a href="tel:+94770491496">
              <PhoneIcon
                sx={{ color: "white", ":hover": { color: "primary.main" } }}
                fontSize="large"
              />
            </a>
          </IconButton>
        </Grid>
        <Grid
          item
          xs={10.5}
          display={"flex"}
          justifyContent={"start"}
          alignItems={"center"}
        >
          <Typography>(123) 456-7890</Typography>
        </Grid>
        <Grid
          item
          xs={1.5}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <IconButton>
            <a href="mailto:rukmadura@gmail.com">
              <PrintIcon
                sx={{ color: "white", ":hover": { color: "primary.main" } }}
                fontSize="large"
              />
            </a>
          </IconButton>
        </Grid>
        <Grid
          item
          xs={10.5}
          display={"flex"}
          justifyContent={"start"}
          alignItems={"center"}
        >
          <Typography>acconengineering@gmail.com</Typography>
        </Grid>
      </Grid>{" "}
    </Box>
  );
};

export default Footer;
