import React from "react";
import { Typography, Grid, Container, Box } from "@mui/material";

import PageTitle from "../components/PageTitle";
import ContactForm from "../components/ContactForm";

export default function Contact() {

    return (<Box sx={{ py: 5, mx: "auto", backgroundColor: "#262626" }}>
        <Container maxWidth="lg"  id="contact">
            <Grid container>
                <Grid item xs={12} sx={{ textAlign: "center" }}>
                    <PageTitle title="Kapcsolat" color="text.secondary"></PageTitle>
                </Grid>
                {/* <Grid item={12}  md={6} >
                   <Typography variant="h5" color="text.secondary">
                    Telefonszám: +36 30 470 0548
                   </Typography>
                </Grid> */}
                <Grid item={12}  md={6} >
                   <ContactForm />
                </Grid>
            </Grid>
        </Container>
    </Box>

    );
}
