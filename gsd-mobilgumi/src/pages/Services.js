import React from "react";
import { Typography, Grid, Container, Box } from "@mui/material";

import PageTitle from "../components/PageTitle";

export default function Services() {
    const services = [
        {
            title: "Szolgáltatás 1",
            subTitle: "szolgáltatás 1",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            title: "Szolgáltatás 2",
            subTitle: "szolgáltatás 2",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            title: "Szolgáltatás 3",
            subTitle: "szolgáltatás 3",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
    ]
    return (<Box sx={{ py:5, mx: "auto", backgroundColor: "#262626" }}>
        <Container maxWidth="lg"  id="services">
            <Grid container>
                <Grid item xs={12} sx={{ textAlign: "center" }}>
                    <PageTitle title="Szolgáltatások" color="text.secondary"></PageTitle>
                </Grid>
                <Grid item={12} container spacing={4}>
                    {
                        services.map((item) => (
                            <Grid item xs={12}  md={4} data-aos="fade-down" key={item.title}>                                <Box sx={{ background: "#111", p: 3, textAlign: "center" }} className="services-box">
                                    <Box sx={{ textAlign: "center" }}>
                                        <Typography variant="h6"
                                            color="text.secondary" sx={{ my: 3 }}>{item.title}</Typography>
                                    </Box>
                                    <Typography
                                        variant="subtitle1"
                                        color="text.contrastText"
                                        sx={{ my: 1 }}

                                    >{item.subTitle}</Typography>

                                    <Typography
                                        variant="subtitle1"
                                        sx={{
                                            textAlign: "justify",
                                            textJustify: "inter-word",
                                            fontFamily: "Exo 2, sans-serif",
                                        }}
                                        color="text.contrastText"

                                    >
                                        {item.text}
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        color="text.contrastText"
                                        sx={{ my: 1 }}
                                    >{item.subTitle}</Typography>

                                    <Typography
                                        variant="subtitle1"
                                        sx={{
                                            textAlign: "justify",
                                            textJustify: "inter-word",
                                            fontFamily: "Exo 2, sans-serif",
                                        }}
                                        color="text.contrastText"

                                        data-aos="fade-down"
                                    >
                                        {item.text}
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        color="text.contrastText"
                                        sx={{ my: 1 }}
                                    >{item.subTitle}</Typography>

                                    <Typography
                                        variant="subtitle1"
                                        sx={{
                                            textAlign: "justify",
                                            textJustify: "inter-word",
                                            fontFamily: "Exo 2, sans-serif",
                                        }}
                                        color="text.contrastText"

                                        data-aos="fade-down"
                                    >
                                        {item.text}
                                    </Typography>
                                </Box>
                            </Grid>


                        ))
                    }
                </Grid>
            </Grid>
        </Container>
    </Box>

    );
}
