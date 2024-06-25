import React from "react";
import { Grid,  Button, Box } from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

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
        <Box sx={{ width: "1400px" }}></Box>
        <Button
          sx={{
            my: 8,
            mx: "auto",
            borderRadius: '30px',
            px: 7,
            py: 2,
            fontWeight: 'bolder',
            "&:hover": {
              transform: "scale(1.3)"
            }
          }}
          variant="contained"
          size="large"
          endIcon={<LocalPhoneIcon sx={{
            strokeWidth: 4
          }} />}
href="tel:+3630-470-0548"
        >

          Hívás        </Button>
      </Grid>
    </Grid >
  );
}
