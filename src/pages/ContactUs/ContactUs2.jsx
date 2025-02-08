import React from "react";
import { Box, Typography, IconButton, Grid, Divider } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

import Rathmalana from "../../assets/Projects/Rathmalana.jpg";
import HoranaAguruwathota from "../../assets/Projects/Horana-Anguruwathota.jpg";
import HDDES from "../../assets/Projects/HDDES.jpg";
import Kottawa from "../../assets/Projects/Kottawa.jpg";

const ContactUs2 = () => {
  AOS.init({ duration: 1000 });

  return (
    <Box
      sx={{
        minHeight: "100svh",
        mt: 5,
        mb: 5,
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box sx={{ maxWidth: 1250, width: "100%" }}>
        <Grid
          container
          spacing={2}
          p={1}
          // sx={{border: "1px solid #EC8032"}}
        >
          <Grid
            item
            xs={12}
            md={6}
            display={{ xs: "none", md: "block" }}
            height={"100%"}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.4207320223586!2d80.05812987581724!3d6.7184033208660585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24b4fca9b78b3%3A0x75a04aa8d842e66f!2sAccon%20engineering%20(Pvt)%20Ltd!5e0!3m2!1sen!2slk!4v1738994852587!5m2!1sen!2slk"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: "15px" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4">Contact Info</Typography>
            <Typography mt={2}>
              Need assistance or have a query? Feel free to get in touch with us
              via email or phone. We're here to help and look forward to hearing
              from you!
            </Typography>
            <Typography mt={6} variant="h5">
              Head Office
            </Typography>
            <Grid container spacing={2} mt={0}>
              <Grid item xs={12} sm={4}>
                <Typography fontWeight={600}>Address</Typography>
                <Typography mt={1}>
                  36/5 Sri Somananda Ln, Horana 12400
                </Typography>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography fontWeight={600}>Phone</Typography>
                <Typography mt={1}>077 024 2094</Typography>
                <Typography>077 024 2094</Typography>
              </Grid>
              <Grid item xs={12} sm={5}>
                <Typography fontWeight={600}>Email</Typography>
                <Typography mt={1}>acconengineering@gmail.com</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider sx={{ mt: 3 }} />
        <Typography variant="h4" textAlign={"center"} mt={2}>
          See Other Locations
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" mt={3} textAlign={"center"} mb={2}>
              Matara Asphalt plant
            </Typography>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.4207320223586!2d80.05812987581724!3d6.7184033208660585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24b4fca9b78b3%3A0x75a04aa8d842e66f!2sAccon%20engineering%20(Pvt)%20Ltd!5e0!3m2!1sen!2slk!4v1738994852587!5m2!1sen!2slk"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: "15px" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" mt={3} textAlign={"center"} mb={2}>
              Wellawaya Asphalt plant
            </Typography>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.4207320223586!2d80.05812987581724!3d6.7184033208660585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24b4fca9b78b3%3A0x75a04aa8d842e66f!2sAccon%20engineering%20(Pvt)%20Ltd!5e0!3m2!1sen!2slk!4v1738994852587!5m2!1sen!2slk"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: "15px" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" mt={3} textAlign={"center"} mb={2}>
              Pokunuwita Concrete plant
            </Typography>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.4207320223586!2d80.05812987581724!3d6.7184033208660585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24b4fca9b78b3%3A0x75a04aa8d842e66f!2sAccon%20engineering%20(Pvt)%20Ltd!5e0!3m2!1sen!2slk!4v1738994852587!5m2!1sen!2slk"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: "15px" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" mt={3} textAlign={"center"} mb={2}>
              Matara Asphalt plant
            </Typography>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.4207320223586!2d80.05812987581724!3d6.7184033208660585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24b4fca9b78b3%3A0x75a04aa8d842e66f!2sAccon%20engineering%20(Pvt)%20Ltd!5e0!3m2!1sen!2slk!4v1738994852587!5m2!1sen!2slk"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: "15px" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Grid>
        </Grid>

        <Divider sx={{ mt: 3 }} />
      </Box>
    </Box>
  );
};

export default ContactUs2;
