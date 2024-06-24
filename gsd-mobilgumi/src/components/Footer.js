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
        bgcolor="#262626"

        color="white"
        sx={{borderTop: "solid 2px #111"}}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Minta Kft.</Box>

              <Box>
                <Typography variant="body1" sx={{my: 1}}>
                  Cégjegyzékszám 11-11-11111
                </Typography>
              </Box>
              <Box>
                <Typography variant="body1">Adószám 22222222-2-22</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Elérhetőség</Box>
              <Box>
                <Typography
                  color="inherit"
                  sx={{
                    textDecoration: "none",
                  }}
                  component="a"
                  variant="body1"
                  href="tel:+3620-111-1111"
                >
                  <LocalPhoneIcon sx={{ mr: 1, pt: 0.8, color: "white" }} />
                  Telefonszám: +36 20 111 1111
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
                  href="mailto: minta@gsd.hu"
                >
                  <EmailIcon sx={{ mr: 1, pt: 0.8, color: "white" }} /> E-mail cím:
                  minta@gsd.hu
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Közösségi média</Box>
              <Box>
                <Typography
                  color="inherit"
                  sx={{
                    textDecoration: "none",
                  }}
                  target="_blank"
                  component="a"
                  variant="body1"
                  href="https://www.facebook.com/gsd-mobilgumi"
                >
                  <FacebookIcon
                    sx={{ mr: 1, 
                      pt: 0.8, 
                      color: 'white' }}
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
                >
                  <InstagramIcon
                    sx={{ mr: 1, pt: 0.8, color: 'white' }}
                  />
                  Instagram
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        bgcolor="#111"

          sx={{ py: 2 }}
        textAlign="center"
      >
        <Container maxWidth="lg">
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
        </Container>
      </Box>
    </footer>
  );
}