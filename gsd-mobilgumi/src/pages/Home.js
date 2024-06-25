import React from "react";
import { Grid,  Button,  } from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export default function Home() {

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
        <Button
          sx={{
            my: 8,
            borderRadius: '30px',
            px: 7,
            py: 2,
            mr: {xs: 3, md: 8},
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
