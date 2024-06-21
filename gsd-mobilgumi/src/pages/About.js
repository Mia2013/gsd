import React from "react";
import { Typography, Grid, Container } from "@mui/material";

import PageTitle from "../components/PageTitle";

export default function About() {

  return (
    <Container maxWidth="lg" id="about">
      <Grid container sx={{ my: { xs: 3, md: 8 }, mx: "auto" }} >
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <PageTitle title="Rólunk"></PageTitle>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="subtitle1"
            sx={{
              textAlign: "justify",
              textJustify: "inter-word",
              fontFamily: "Exo 2, sans-serif",
            }}
            data-aos="fade-down"
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
