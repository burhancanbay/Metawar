import { Stack, Typography } from "@mui/material";

import { MySwiperVideo } from "../components/MySwiperVideo";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../CSS/mySwiper.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export const Trailers = () => {
  return (
    <Stack
      id="trailers"
      paddingLeft={20}
      paddingRight={20}
      paddingTop={10}
      paddingBottom={20}
      spacing={6}
      color="white"
    >
      <Typography
        textAlign="center"
        color="orange"
        fontFamily="unset"
        fontSize={30}
      >
        METAWARS TRAILERS
      </Typography>

      <MySwiperVideo />
    </Stack>
  );
};
