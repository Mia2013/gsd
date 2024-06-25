import React, { useState } from "react";
import {
  AppBar,
  Button,
  Container,
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import { Link } from "react-scroll";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import MenuIcon from "@mui/icons-material/Menu";
import ScrollToColor from "./ScrollToColor";

import DrawerAppBar from "./Drawer";

const ResponsiveAppBar = ({ pages }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSetActiveSection = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <ScrollToColor>
      <AppBar
        position="fixed"
      >
        <Container maxWidth="xxl">
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: "row",
              justifyContent: "space-between",
              overflowY: { xs: "hidden" },
            }}
          >
            <Typography
              className="logo"
              component="a"
              href="/"
              sx={{
                display: { xs: "none", md: "flex" },
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 2, textDecoration: "none",
                color: "white", fontWeight: "bolder",
                textTransform: "uppercase",
                fontFamily: "Italianno, cursive",

              }}
            >
              <Typography
                component="img"
                className="logo"
                sx={{
                  width: "15%",
                }}
                src={`${process.env.PUBLIC_URL}/pic/logo.png`}
              ></Typography>
              GSD MobilGumi
            </Typography>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {pages.map((page) => (
                <Link
                  to={page.to}
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={400}
                  key={page.name}
                  onSetActive={handleSetActiveSection}
                >
                  <Button
                    key={page.name}
                    sx={{
                      display: "block",
                      // fontFamily: "Exo 2, sans-serif",
                      fontSize: "1rem",
                      fontWeight: "bolder",
                      mx: 1,
                      color: "#ff4c4c"

                    }}
                    className={page.to === `#${activeSection}` ? "active" : ""}

                  >
                    {page.name}
                  </Button>

                </Link>
              ))}
              <Button
                sx={{
                  borderRadius: '30px',
                  px: 3,
                  py: 1,
                  fontWeight: 'bolder',
                  mx: 2,
                  "&:hover": {
                    transform: "scale(1.1)"
                  }
                }}
                variant="contained"
                size="small"
                endIcon={<LocalPhoneIcon sx={{
                  strokeWidth: 4
                }} />}
                href="tel:+3630-470-0548"
              >

                Hívás        </Button>
            </Box>

          </Box>
          <DrawerAppBar
            pages={pages}
            handleDrawerToggle={handleDrawerToggle}
            mobileOpen={mobileOpen}
          />{" "}
        </Container>
        <Box
          sx={{
            position: "relative",
            display: { xs: "flex", md: "none" },
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            width: "100%",
            height: { xs: "100px", sm: "120px" },
          }}
        >
          <IconButton
            size="large"
            aria-label="hamburger-menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleDrawerToggle}
            sx={{
              position: "absolute",
              left: "16px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <MenuIcon sx={{ color: "white" }}
            />
          </IconButton>
          <Typography
            className="logo"
            component="a"
            href="/"
            sx={{
              width: { xs: "150px", sm: "180px" },
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              // flexDirection: "row",
              //   justifyContent: "flex-start",
              //   alignItems: "center",
              gap: 2, textDecoration: "none",
              color: "white", fontWeight: "bolder",
              textTransform: "uppercase",
            }}
          >
            <Typography
              component="img"
              className="logo"
              sx={{ width: "20%" }}
              src={`${process.env.PUBLIC_URL}/pic/logo.png`}
            ></Typography>
            GSD MobilGumi

          </Typography>
        </Box>
      </AppBar>
    </ScrollToColor>
  );
};

export default ResponsiveAppBar;
