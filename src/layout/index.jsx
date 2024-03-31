import React from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader";
import Footer from "./footer";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Box } from "@mui/material";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";

const pages = [
  { name: "Home", path: "home" },
  { name: "Services", path: "services" },
  { name: "Projects", path: "projects" },
  { name: "About Us", path: "about"},
  { name: "Gallery", path: "gallery" },
  { name: "Contact Us", path: "contact" },
];

function ScrollTop({ children }) {
  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={() => handleClick()}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

const Layout = () => {
  return (
    <div>
      <MainHeader pages={pages} />
      <Box minHeight={"60svh"} mt={10}>
        <Outlet />
      </Box>
      <Footer pages={pages} />
      <ScrollTop>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
};

export default Layout;
