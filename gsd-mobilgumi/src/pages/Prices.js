import React, { useId } from "react";
import { Grid, Typography, Container, Box, TableContainer, TableBody, TableCell, Table, TableRow } from "@mui/material";
import PageTitle from "../components/PageTitle";

export default function Prices() {
  const id = useId();

  const priceList1 = [
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
    {
      name: 'Kisteher gépjármű (3,5t)',
      value: "4 700 Ft/db"
    },
  ];


  const priceList2 = [
    {
      name: '13"-17"',
      value: "2 500 Ft/db"
    },
    {
      name: '18"-20"',
      value: "3 000 Ft/db"
    },
    {
      name: 'gumizsák',
      value: "200 Ft/db"
    },
  ]


  return (
    <Box sx={{
      backgroundImage: `url(${process.env.PUBLIC_URL}/pic/prices.jpg)`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
    }}>
      <Box sx={{
        backgroundColor: "rgba(255,255,255,0.9)",
      }}>
        <Container maxWidth="lg" id="prices" >
          <Grid container sx={{ py: 5 }} alignItems="start" >
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <PageTitle title="Árak"></PageTitle>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                mt: 3,
                mb: 2
              }}
              data-aos="fade-up"
            >
              <Typography variant="h5">Gumicsere </Typography>
              <Typography variant="subtitle1">Személyautón lemez- és alufelni centízorással </Typography>

              <TableContainer
                sx={{
                  width: { xs: "95%", md: "70%" },
                  borderRadius: "5px",
                  backgroundColor: {
                    xs: "rgba(255, 255, 255, 0.8)",
                    md: "transparent",
                  },
                }}
              >
                <Table aria-label="simple table">
                  <TableBody>
                    {priceList1.map((row) => (
                      <TableRow
                        key={id + row.name}
                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      >
                        <TableCell align="left">{row.name}</TableCell>
                        <TableCell align="right">{row.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

            </Grid>
            <Grid
              item
              xs={12}
              md={6}

              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                mt: 3,
                mb: 2
              }}
              data-aos="fade-up"
            >
              <Typography variant="h5">Kerékcsere </Typography>
              <Typography variant="subtitle1">Személyautón lemez- és alufelni centízorással </Typography>

              <TableContainer
                sx={{
                  width: { xs: "95%", md: "70%" },
                  borderRadius: "5px",
                  backgroundColor: {
                    xs: "rgba(255, 255, 255, 0.8)",
                    md: "transparent",
                  },
                }}
              >
                <Table aria-label="simple table">
                  <TableBody>
                    {priceList2.map((row) => (
                      <TableRow
                        key={id + row.name}
                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      >
                        <TableCell align="left">{row.name}</TableCell>
                        <TableCell align="right">{row.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
