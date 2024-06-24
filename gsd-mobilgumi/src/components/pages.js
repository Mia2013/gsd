import React from "react";

const Home = React.lazy(() => import("../pages/Home"));
const About = React.lazy(() => import("../pages/About"));
const Prices = React.lazy(() => import("../pages/Prices"));
const Contact = React.lazy(() => import("../pages/Contact"));
const Services = React.lazy(() => import("../pages/Services"));

export const pages = [
  {
    name: "Kezdőlap",
    to: "back-to-top-anchor",
    component: <Home />,
  },

  {
    name: "Rólunk",
    to: "about",
    component: <About />,
  },
  {
    name: "Szolgáltatások",
    to: "services",
    component: <Services />,
  },
  {
    name: "Árak",
    to: "prices",
    component: <Prices />,
  },
  {
    name: "Kapcsolat",
    to: "contact",
    component: <Contact />,
  },
];
