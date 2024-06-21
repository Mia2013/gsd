import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import { Link } from "react-scroll";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Home() {
  const images = [
    { src: `${process.env.PUBLIC_URL}/pic/home.jpg`, position: "center" },
  ]
  return (
    <Grid
      container
      sx={{
        mt: -4,
        backgroundImage: `url(${process.env.PUBLIC_URL}/pic/home.jpg)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        width: '100%',
        height: "100vh",
      }}
      id="back-to-top-anchor">
      <Grid item xs={12} sx={{

        mt: 25
      }}>
        <Button
          sx={{
            my: 2,
            mx: "auto",
            display: "block",
          }}
          variant= "contained"
          endIcon={<ArrowForwardIcon/>}
        >
          <Link
            // onClick={handleDrawerToggle}
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Ajánlat kérése
          </Link>
        </Button>
      </Grid>
    </Grid >
  );
}
