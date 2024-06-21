import React, { useEffect, Suspense } from "react";
import { Toolbar, Box, CssBaseline } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

import BackToTop from "./components/BackToTopButton";
import ResponsiveAppBar from "./components/Nav/Nav";
import Loading from "./components/Loading";
// import FixedBottomNavigation from "./components/Footer";
import { pages } from "./components/pages";
import Footer from "./components/Footer";

let theme = createTheme();
theme = responsiveFontSizes(theme);

theme = createTheme(theme, {
  palette: {
    text: {
      // primary: "#a97142",
      // secondary: "#ff4c4c"
    },
    // action: {
    //   active: "#a97142", 
    // },
    primary: {
      main: '#ff4c4c', 
      light: '#ff4c42',
      dark: '#ff4c62',
      contrastText: '#fff',
    },
    // background: {
    //   default: "#1E1F20" 
    // }
  },
});

function App() {
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 1000,
      useClassNames: false,
      throttleDelay: 99,
      once: true,
      anchorPlacement: "top-bottom",
    });
    AOS.refresh();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
          <CssBaseline />
          {/* <Toolbar id="back-to-top-anchor"/> */}


          <ResponsiveAppBar pages={pages} />
          <Suspense fallback={<Loading />}>
            <Box>
              {pages.map((item) => (
                <Box key={item.name}>{item.component} </Box>
              ))}
            </Box>

            <BackToTop />
          </Suspense>
<Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
