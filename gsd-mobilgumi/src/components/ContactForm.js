import { useState } from "react";
import {
    Button,
    Typography,
    Box,
    TextField,
    FormControlLabel,
    Checkbox,
    Alert,
    FormHelperText,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validation";
import axios from "axios";

export default function ContactForm({ styles }) {
    const [alert, setAlert] = useState("");
    const {
        register,
        reset,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        reValidateMode: "onChange",
    });

    const onSubmit = async (data) => {
        const url = `${process.env.REACT_APP_BACKEND_URI}/contact`;
        try {
            const response = await axios.post(url, data);
            if (response.status !== 200) {
                throw new Error();
            }
            setAlert({
                severity: "success",
                text: `Kedves ${data.name}! Köszönjük az érdeklődést, az üzenetét megkaptuk.`,
            });
            reset();
        } catch (error) {
            setAlert({
                severity: "error",
                text: `Kedves ${data.name}! Sajnos valami hiba történt, próbálja meg újra. Ha ismét probélma adódik, akkor kérem hívjon telefonon vagy írjon e-mailt.`,
            });
        }
    };

    return (
        <Box
            data-aos="zoom-in"
            sx={{
                mb: 4, p: 4, mx: "auto", maxWidth: { xs: "90%", md: "100%" }, backgroundColor: "rgba(255, 255, 255, 0.8)",
                width: " 100%",
                borderRadius: "25px",
                margin: "20px",
                boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.6)",
            }}
        >
            <Box display="flex" justifyContent="center" flexDirection="column">
                <Typography
                    variant="h6"
                    color="primary"
                    sx={{ mb: 4, textAlign: "center", textTransform: "uppercase", fontWeight: "bolder" }}
                >
                    Ajánlatkérés
                </Typography>

                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <Box display="flex" justifyContent="center" flexDirection="column" gap={3}>


                        <TextField
                            id="outlined-name"
                            placeholder="Név"
                            name="name"
                            label="Név"
                            required
                            // error={errors.name ? true : false}
                            // helperText={errors.name && errors.name.message}
                            {...register("name")}
                            // aria-invalid={errors.name ? "true" : "false"}
                            fullWidth
                        />

                        <TextField
                            id="outlined-name"
                            label="E-mail cím"
                            placeholder="E-mail cím"
                            name="email"
                            required
                            // error={errors.email ? true : false}
                            // helperText={errors.email && errors.email.message}
                            {...register("email")}
                            // aria-invalid={errors.email ? "true" : "false"}
                            fullWidth

                        />

                        <TextField
                            id="outlined-name"
                            label="Telefonszám"
                            placeholder="Telefonszám"
                            name="phoneNumber"
                            required
                            // error={errors.phoneNumber ? true : false}
                            // helperText={errors.phoneNumber && errors.phoneNumber.message}
                            {...register("phoneNumber")}
                            // aria-invalid={errors.phoneNumber ? "true" : "false"}
                            fullWidth

                        />

                        <TextField
                            id="outlined-name"
                            label="Cím (település, utca)"
                            placeholder="Telefonszám"
                            name="address"
                            required
                            // error={errors.address ? true : false}
                            // helperText={
                            //     errors.address?.message
                            //         ? errors.address.message
                            //         : "Az a cím, ahová a klímát szeretné beszereltetni"
                            // }
                            {...register("address")}
                            // aria-invalid={errors.address ? "true" : "false"}
                            fullWidth

                        />

                        <TextField
                            id="outlined-name"
                            label="Üzenet"
                            placeholder="Üzenet"
                            name="message"
                            required
                            // error={errors.message ? true : false}
                            // helperText={
                            //     errors.message?.message
                            //         ? errors.message.message
                            //         : "Néhány szóban írja le, hogy hány darab klímát szeretne, csak hűtésre, vagy hűtésre és fűtésre is használná őket, hány négyzetméteres szobában szeretné elhelyezni"
                            // }
                            {...register("message")}
                            // aria-invalid={errors.message ? "true" : "false"}
                            multiline
                            minRows={3}
                            maxRows={7}
                            fullWidth

                        />
                        <FormControlLabel
                            fullWidth
                            control={
                                <Checkbox
                                    name="gdpr"
                                    required
                                    {...register("gdpr")}
                                    style={{
                                        color: errors.gdpr ? "#d32f2f" : "initial",
                                    }}
                                    value={watch("gdpr")}
                                />
                            }
                            label={
                                <>
                                    <Typography variant="body1">
                                        Elolvastam és megértettem az
                                        <Typography
                                            sx={{
                                                m: 1,
                                            }}
                                            component="a"
                                            variant="body1"
                                            href="/adatvedelem"
                                        >
                                            Adatvédelmi tájékoztatóban
                                        </Typography>
                                        foglaltakat
                                    </Typography>
                                    {/* {errors.gdpr && (
                                        <FormHelperText
                                            style={{
                                                color: "#d32f2f",
                                            }}
                                        >
                                            {errors.gdpr?.message}
                                        </FormHelperText>
                                    )} */}
                                </>
                            }
                        />

                        <Button type="submit" variant="contained" sx={{ borderRadius: "30px", py: 1, px: 3 }} endIcon={<SendIcon />}>
                            Küldés
                        </Button>
                    </Box>
                </form>
                {alert && <Alert severity={alert.severity}>{alert.text} </Alert>}
            </Box>
        </Box>
    );
}