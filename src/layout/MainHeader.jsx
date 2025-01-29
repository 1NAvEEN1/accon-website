import React, { useEffect, useState } from "react";
import {
  IconButton,
  Menu,
  MenuItem,
  Drawer,
  Grid,
  useScrollTrigger,
  Slide,
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LogoHeading from "../assets/LogoHeading.png";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PhoneIcon from "@mui/icons-material/Phone";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function MainHeader(props) {
  const location = useLocation();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const navigate = useNavigate();
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const [urlLocation, setUrlLocation] = useState("");
  const [urlLocation2, setUrlLocation2] = useState("");

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleNavigation = (path) => {
    navigate(path);
    setDrawerOpen(false);
    scrollToTop();
  };

  // State and handlers for the Menu component
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event, pageName) => {
    if (pageName == "OUR SERVICES") {
      setAnchorEl(event.currentTarget);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const currentUrl = location.pathname;
    const pathSegments = currentUrl.split("/");
    const firstPath = pathSegments[1];
    const secondPath = pathSegments[2]; // Access the second path segment
    setUrlLocation(firstPath);
    setUrlLocation2(secondPath);
    // Assuming you want to navigate to "home" when the firstPath is empty or undefined
    if (!firstPath) {
      navigate("home");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar
          sx={{
            boxShadow: "none",
            background: "#131212",
            position: "fixed",
            top: 0,
            pt: 1,
            pb: 1,
          }}
        >
          <Toolbar disableGutters>
            <Grid
              container
              sx={{
                display: { xs: "flex", lg: "none" },
              }}
            >
              <Grid
                item
                xs={5}
                pt={1}
                pl={2}
                display={"flex"}
                justifyContent={"center"}
              >
                {/* <img src={LogoHeading} /> */}
                <Box>
                  <Typography
                    color={"secondary.main"}
                    variant="h3"
                    textAlign={"center"}
                  >
                    ACCON
                  </Typography>
                  <Typography
                    color={"primary.main"}
                    mt={-1}
                    textAlign={"center"}
                    fontWeight={500}
                  >
                    Engineering PVT
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={7}
                display={"flex"}
                justifyContent={"end"}
                alignItems={"center"}
                pr={3}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={toggleDrawer}
                  color="black"
                >
                  <MenuRoundedIcon fontSize="large" />
                </IconButton>

                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", sm: "none" },
                  }}
                >
                  {props.pages.map((page) => (
                    <MenuItem
                      key={page.name}
                      component={Link}
                      to={page.path}
                      onClick={handleCloseNavMenu}
                    >
                      <Typography textAlign="center">{page.name}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Grid>
            </Grid>
            <Box
              sx={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
              <Grid
                container
                sx={{
                  display: { xs: "none", lg: "flex" },
                  pl: 5,
                  pr: 8,
                  maxWidth: 1800,
                }}
              >
                <Grid item lg={2} pl={2}>
                  <Box>
                    {/* <img src={LogoHeading} /> */}
                    <Typography
                      color={"primary.main"}
                      variant="h3"
                      textAlign={"center"}
                    >
                      ACCON
                    </Typography>
                    <Typography
                      color={"white"}
                      mt={-1.5}
                      textAlign={"center"}
                      fontWeight={500}
                    >
                      Engineering PVT
                    </Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  lg={8}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Box>
                    <Grid container>
                      {props.pages.map((page) => (
                        <Grid
                          item
                          xs={2}
                          key={page.name}
                          sx={{
                            bgcolor: "transparent",
                            borderRadius: 2,
                            width: 120,
                            p: 0.1,
                            cursor:
                              urlLocation == page.path ? "default" : "pointer",
                            boxShadow: "none",
                          }}
                          id="basic-button"
                          onClick={() => handleNavigation(page.path)}
                        >
                          <Typography
                            variant="button"
                            fontSize={15}
                            sx={{
                              color:
                                urlLocation == page.path
                                  ? "primary.main"
                                  : "white",
                              transition: "all 0.3s ease",
                              ":hover": {
                                color:
                                  urlLocation == page.path
                                    ? "primary.main"
                                    : "grey",
                              },
                              fontWeight: 500,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              pt: 0,
                            }}
                          >
                            {page.name}
                          </Typography>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Grid>
                <Grid
                  item
                  lg={2}
                  display={"flex"}
                  justifyContent={"end"}
                  alignItems={"center"}
                >
                  <Button>
                    <Typography
                      fontSize={17}
                      fontWeight={600}
                      color={"primary.main"}
                      display={"flex"}
                    >
                      <PhoneIcon /> +94 77 024 2094
                    </Typography>
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        slotProps={{
          backdrop: {
            sx: {
              background: "rgba(0,0,0,0.4)",
            },
          },
        }}
        PaperProps={{
          sx: {
            width: 300,
            backgroundColor: "rgb(255, 255, 255, 0.3)",
            backdropFilter: "blur(7px)",
          },
        }}
      >
        <Grid
          container
          display={"flex"}
          justifyContent={"center"}
          sx={{ minHeight: "100svh" }}
          pl={1}
        >
          <Grid
            item
            xs={12}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box>
              <Typography
                color={"secondary.main"}
                variant="h2"
                textAlign={"center"}
              >
                ACCON
              </Typography>
              <Typography
                color={"primary.main"}
                mt={-1}
                textAlign={"center"}
                fontWeight={500}
                variant="h6"
              >
                Engineering PVT
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Grid container display={"flex"} justifyContent={"center"}>
              {props.pages.map((page) => (
                <Grid
                  item
                  xs={12}
                  key={page.name}
                  sx={{
                    bgcolor:
                      urlLocation == page.path ? "primary.main" : "#e6e7e8",
                    borderRadius: 1,
                    height: page.subMenus ? 235 : 40,
                    mr: 2,
                    p: 1,
                    mb: 2.5,
                    boxShadow:
                      urlLocation == page.path
                        ? "4px 7px 5px 1px rgba(0, 0, 0, 0.2)"
                        : "3px 5px 5px 1px rgba(0, 0, 0, 0.1)",
                    cursor: urlLocation == page.path ? "default" : "pointer",
                    display: page.subMenus ? "inline" : "flex",
                    justifyContent: "center",
                    alignItems: "start",
                    pt: 1.3,
                  }}
                  onClick={() => handleNavigation(page.path)}
                >
                  <Box display={"flex"} justifyContent={"center"}>
                    <Typography
                      fontWeight={500}
                      sx={{
                        color: urlLocation == page.path ? "white" : "black",
                        ":hover": {
                          color:
                            urlLocation == page.path ? "white" : "primary.main",
                        },
                        display: "flex",
                        alignItems: "center",
                        mb: 1,
                      }}
                    >
                      {page.name}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item>
            <IconButton
              sx={{ boxShadow: 5, bgcolor: "#e6e7e8" }}
              onClick={toggleDrawer}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Drawer>
    </>
  );
}

export default MainHeader;
