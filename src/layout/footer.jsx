import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import Logo from "../assets/Logo.png";

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
        pt: { md: 5, xs: 0 },
        pr: 5,
        pl: 5,
        pb: { md: 5, xs: 8 },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box maxWidth={1500}>
        {/* <Divider sx={{ bgcolor: "#979797", height: "2px" }} /> */}
        <Grid container>
          <Grid item xs={12} lg={3} mt={5}>
            {/* <img src={LogoFooter} /> */}
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box
                component="img"
                sx={{ height: { xs: 70, lg: 100 } }}
                src={Logo}
              />
              {/* <Typography color={"white"} variant="h2" textAlign={"center"}>
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
              </Typography> */}
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
                href="https://www.facebook.com/share/16TNMHUnDR/?mibextid=wwXIfr"
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
            NAVEEN
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
          <Typography>36/5, Sri Somananda Mawatha, Horana</Typography>
        </Grid>
        <Grid
          item
          xs={1.5}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          mb={{ xs: -1.5, sm: 0 }}
        >
          <PhoneIcon
            sx={{
              color: "white",
              ":hover": { color: "primary.main" },
              mt: { xs: -1.5, sm: 0 },
            }}
            fontSize="large"
          />
        </Grid>
        <Grid
          item
          xs={10.5}
          display={{ sm: "flex", xs: "block" }}
          justifyContent={"start"}
          alignItems={"center"}
          mb={{ xs: -1.5, sm: 0 }}
        >
          <Box display={"flex"}>
            <Typography mr={1}>
              <a
                href="tel:+940342267509"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  ":hover": { color: "primary.main" },
                }}
              >
                (034) 226 7509
              </a>
            </Typography>
            /
            <Typography ml={1} mr={1}>
              <a
                href="tel:+940777489342"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  ":hover": { color: "primary.main" },
                }}
              >
                (077) 748 9342
              </a>
            </Typography>
          </Box>
          <Box display={{ xs: "none", sm: "block" }}>/</Box>
          <Typography ml={{ sm: 1, xs: 0 }}>
            <a
              href="tel:+940773992374"
              style={{
                textDecoration: "none",
                color: "inherit",
                ":hover": { color: "primary.main" },
              }}
            >
              (077) 399 2374
            </a>
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
          <Typography>
            <a
              href="mailto:info@accon.lk"
              style={{
                textDecoration: "none",
                color: "inherit",
                ":hover": { color: "primary.main" },
              }}
            >
              info@accon.lk
            </a>
          </Typography>
        </Grid>
      </Grid>{" "}
    </Box>
  );
};

export default Footer;
