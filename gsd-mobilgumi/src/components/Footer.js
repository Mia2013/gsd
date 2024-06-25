import * as React from "react";

import { Grid, Container, Box, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

export default function FixedBottomNavigation() {
  return (
    <footer>
      <CssBaseline />
      <Box
        px={{ xs: 3, sm: 5 }}
        py={{ xs: 5, sm: 5 }}
        bgcolor="#111"

        color="white"
        sx={{borderTop: "solid 2px #111"}}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} color="text.secondary">Minta Kft.</Box>

              <Box>
                <Typography variant="body1" sx={{my: 1}} color="text.secondary">
                  Cégjegyzékszám 11-11-11111
                </Typography>
              </Box>
              <Box>
                <Typography variant="body1" color="text.secondary">Adószám 22222222-2-22</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} color="text.secondary">Elérhetőség</Box>
              <Box>
                <Typography
                  color="inherit"
                  sx={{
                    textDecoration: "none",
                  }}
                  component="a"
                  variant="body1"
                  href="tel:+3630-470-0548"
                  color="text.secondary"
                >
                  <LocalPhoneIcon sx={{ mr: 1, pt: 0.8 }} color="text.secondary"/>
                  Telefonszám: +36 30 470 0548
                </Typography>
              </Box>
              <Box>
                <Typography
                  color="inherit"
                  sx={{
                    textDecoration: "none",
                    my: 5,
                  }}
                  component="a"
                  variant="body1"
                  href="mailto: gsd150207@gmail.com"
                  color="text.secondary"
                >
                  <EmailIcon sx={{ mr: 1, pt: 0.8, }} color="text.secondary"/> E-mail cím:
                  gsd150207@gmail.com

                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} color="text.secondary">Közösségi média</Box>
              <Box>
                <Typography
                  color="inherit"
                  sx={{
                    textDecoration: "none",
                  }}
                  target="_blank"
                  component="a"
                  variant="body1"
                  href="https://www.facebook.com/profile.php?id=61560684907877&locale=hu_HU"
                  color="text.secondary"
                >
                  <FacebookIcon
                    sx={{ mr: 1, 
                      pt: 0.8, 
                     }}
                  />
                  Facebook
                </Typography>
              </Box>
              <Box>
                <Typography
                  color="inherit"
                  sx={{
                    textDecoration: "none",
                  }}
                  target="_blank"

                  component="a"
                  variant="body1"
                  href="https://www.instagram.com/gsd-mobilgumi"
                color="text.secondary"
                >
                  <InstagramIcon
                    sx={{ mr: 1, pt: 0.8 }}
                  />
                  Instagram
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
{/* 
      <Box
        bgcolor="#111"

          sx={{ py: 2 }}
        textAlign="center"
      > */}
        {/* <Container maxWidth="lg">
          <Box textAlign="center">
            <Typography
              color="white"
              sx={{
                textDecoration: "none",
              }}
              component="a"
              variant="body1"
              href="/adatvedelem"
            >
              Adatvédelmi tájékoztató
            </Typography>{" "}
          </Box>
        </Container> */}
      {/* </Box> */}
    </footer>
  );
}