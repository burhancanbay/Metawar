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
import { Stack } from "@mui/material";

import MetawarImg1 from "../assets/newImages/1.jpeg";
import MetawarImg2 from "../assets/newImages/2.jpeg";
import MetawarImg3 from "../assets/newImages/3.jpeg";
import MetawarImg4 from "../assets/newImages/4.jpeg";
import MetawarImg5 from "../assets/newImages/5.jpeg";
import MetawarImg6 from "../assets/newImages/6.jpeg";
import MetawarImg7 from "../assets/newImages/7.jpeg";
import MetawarImg8 from "../assets/newImages/8.jpeg";
import MetawarImg9 from "../assets/newImages/9.jpeg";
import MetawarImg10 from "../assets/newImages/10.jpeg";

export const MySwiper = () => {
  return (
    <Stack
      sx={{
        height: 400,
        width: {
          xs: 200,
          sm: 400,
          md: 600,
          lg: 800,
          xl: 1000,
        },
      }}
    >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={MetawarImg1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MetawarImg2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MetawarImg3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MetawarImg4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MetawarImg5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MetawarImg6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MetawarImg7} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MetawarImg8} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MetawarImg9} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MetawarImg10} />
        </SwiperSlide>
      </Swiper>
    </Stack>
  );
};
