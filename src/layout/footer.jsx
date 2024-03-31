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
        bgcolor: "#090D10",
        pt: 12,
        pr: 15,
        pl: 15,
        pb: 5,
      }}
    >
      <Divider sx={{ bgcolor: "#979797", height: "2px" }} />
      <Grid container>
        <Grid
          item
          lg={3}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          mt={5}
        >
          <img src={LogoFooter} />
        </Grid>
        <Grid item lg={2} display={"flex"} justifyContent={"center"} mt={5}>
          <Grid container spacing={4} width={50}>
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
          lg={7}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          mt={1}
        >
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
              <Typography>vijay@drumscafe.com.au</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          lg={12}
          display={"flex"}
          justifyContent={"end"}
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
      <Divider sx={{ bgcolor: "#979797" }} />
      <Typography color={"white"} textAlign={"end"} mt={4}>
        COPYRIGHT ©2024 DRUMS - POWERED BY{" "}
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "#FE760F" }}
        >
          VARIENTX
        </a>
      </Typography>
    </Box>
  );
};

export default Footer;
