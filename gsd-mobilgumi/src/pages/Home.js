import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
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
        height: "104vh",
      }}
      id="back-to-top-anchor">
      <Grid item xs={12} 
      sx={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        flexDirection: "row"
      }}
      data-aos="fade-up"

      >
        <Box sx={{width: "1400px"}}></Box>
        <Button
          sx={{
            my: 8,
            mx: "auto",
            borderRadius: '30px',
            px: 7,
            py: 2,
            fontWeight: 'bolder'
          }}
          variant="contained"
          endIcon={<ArrowForwardIcon sx={{
            strokeWidth: 4
          }} />}

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
