import React from "react";
import { Typography, Grid, Container } from "@mui/material";

import PageTitle from "../components/PageTitle";

export default function About() {

  return (
    <Container maxWidth="lg" id="about" >
      <Grid container sx={{ py: 5, mx: "auto" }} >
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <PageTitle title="Rólunk"></PageTitle>
        </Grid>
       <Grid item xs={12} md={4} >
       <Typography
              component="img"
              className="logo"
              sx={{
                width: "100%",
                paddingLeft: 0
              }}
              src={`${process.env.PUBLIC_URL}/pic/home.jpg`}
              data-aos="fade-right"

            ></Typography>
       </Grid>
        <Grid item xs={12} md={8}>
          <Typography
            variant="subtitle1"
            sx={{
              textAlign: "justify",
              textJustify: "inter-word",
              fontFamily: "Exo 2, sans-serif",
              ml: 5
            }}
            data-aos="fade-left"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

          </Typography>
        </Grid>

      </Grid>
    </Container>
  );
}
