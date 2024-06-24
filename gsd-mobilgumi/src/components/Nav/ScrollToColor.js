import React from "react";
import { useScrollTrigger } from "@mui/material";

const ScrollHandler = (props) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: props.window ? window() : undefined,
  });

  return React.cloneElement(props.children, {
    style: {
      backgroundColor: trigger ? "rgba(30, 31, 32, 0.8)" : "transparent" ,
      boxShadow: trigger ? "0 4px 4px rgba(0, 0, 0, 0.4)" : "none",
    },
  });
};

const ScrollToColor = (props) => {
  return <ScrollHandler {...props}>{props.children}</ScrollHandler>;
};

export default ScrollToColor;