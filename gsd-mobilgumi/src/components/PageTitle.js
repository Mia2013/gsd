import { Typography, Box } from "@mui/material";
import { Divider } from "@mui/material";

export default function PageTitle({ title, id, color="text.primary" }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        my: { xs: 5, md: 12 },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          // fontFamily: "Italianno, cursive",
          textTransform: "uppercase",
          fontWeight: "bolder",
          color: color
        }}
        className="title"
        data-aos="fade-up"
      >
        {title}
      </Typography>

    </Box>
  );
}
