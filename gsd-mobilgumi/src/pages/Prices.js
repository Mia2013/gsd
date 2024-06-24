import React, { useId } from "react";
import { Grid, Typography, Container, Box } from "@mui/material";
import PageTitle from "../components/PageTitle";

export default function Prices() {
  const id = useId();

  const priceList1=[
    {
      name: '13"-15"',
      value: "3 500 Ft/db"
    },
    {
      name: '16"-18"',
      value: "4 500 Ft/db"
    },
    {
      name: '19"-20"',
      value: "5 500 Ft/db"
    },
    {
      name: 'Defekt javítás',
      value: "15 000 Ft/db",
    },
    {
      name: 'Defekt javítás autópályán',
      value: "20 000 Ft",
    },
    {
      name: 'Pótkerék felhelyezés',
      value: "15 000 Ft",
    },
    {
      name: 'Felni peremcsiszolás, tömítés',
      value: "1 000 Ft/db",
    },
    {
      name: 'Gumiszelep csere',
      value: "500 Ft",
    },
  ]
  return (
    <Container maxWidth="lg" id="prices">
      <Grid container  sx={{ flexWrap: "wrap" }}>
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <PageTitle title="Árak"></PageTitle>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h5">Lemez- és alufelni gumicsere centírozással (személyautó)</Typography>
          {priceList1.map((item) => (
            <Box key={id + item.name} sx={{ my: 3 }}>
              <Typography
                variant="h6"
                sx={{
                  // fontFamily: "Italianno, cursive",
                }}
                data-aos="fade-right"
              >
                {" "}
                {item.name}
              </Typography>
              <Typography variant="subtitle1" data-aos="fade-left">
                {" "}
                {item.value}
              </Typography>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
