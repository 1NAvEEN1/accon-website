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
                <Typography mt={1}>
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

                <Typography mt={1}>
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

                <Typography mt={1}>
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
              <Grid item xs={12} sm={5}>
                <Typography fontWeight={600}>Email</Typography>
                <Typography mt={1}>
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
                <Typography mt={1}>
                  <a
                    href="mailto:acconeng@gmail.com"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      ":hover": { color: "primary.main" },
                    }}
                  >
                    acconeng@gmail.com
                  </a>
                </Typography>
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
              Pokunuwita Ready Mix Plant & Office
            </Typography>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.270812771834!2d80.0275978!3d6.7367808999999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24def2e2d1243%3A0x112014c14398ef80!2sAccon%20Engineering%20ready%20mix%20plant%20Horana!5e0!3m2!1sen!2slk!4v1748681146281!5m2!1sen!2slk"
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
              Matara Asphalt & Ready Mix Plant
            </Typography>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.0787580278475!2d80.6271809!3d5.9838936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1390041b58bdd%3A0xca987e9ffee29990!2sAccon%20Engineering%20(Pvt)%20Ltd.%20Asphalt%20Plant%20Matara!5e0!3m2!1sen!2slk!4v1748681561304!5m2!1sen!2slk"
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
              Kiriella Asphalt Plant
            </Typography>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.4311246866964!2d80.2866856!3d6.7171275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3b9e7f4452155%3A0x574e136532958000!2sAccon%20Engineering%20Asphalt%20Ready%20Mix%20Plant!5e0!3m2!1sen!2slk!4v1748681332309!5m2!1sen!2slk"
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
              Kandana Ready Mix Plant
            </Typography>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.6976045102697!2d80.0921207!3d6.684331199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24b0022bec74d%3A0xedafbdcbb497ae1b!2sAccon%20Readymix%20-%20Horana!5e0!3m2!1sen!2slk!4v1748681259301!5m2!1sen!2slk"
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
