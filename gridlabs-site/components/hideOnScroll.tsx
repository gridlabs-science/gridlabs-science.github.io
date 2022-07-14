import { Slide, SlideProps, useScrollTrigger } from "@mui/material";
import React from "react";

export const HideOnScroll = ({ children }: SlideProps) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};
