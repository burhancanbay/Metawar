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

import YouTube from "react-youtube";

export const MySwiperVideo = () => {
  return (
    <Stack
      sx={{
        height: 500,
        width: {
          xs: 200,
          sm: 400,
          md: 600,
          lg: 800,
          xl: 1000,
        },
      }}
      paddingTop={5}
    >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        onAutoplayPause={() => {
          console.log("pause");
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <YouTube videoId="1cLciJlZxp0" opts={{ height: 420, width: "800" }} />
        </SwiperSlide>
        <SwiperSlide>
          <YouTube videoId="S7u8JfRiOU8" opts={{ height: 420, width: "800" }} />
        </SwiperSlide>
        <SwiperSlide>
          <YouTube videoId="kH2B5DIHpyk" opts={{ height: 420, width: "800" }} />
        </SwiperSlide>
        <SwiperSlide>
          <YouTube videoId="y9UKss3PlS4" opts={{ height: 420, width: "800" }} />
        </SwiperSlide>
        <SwiperSlide>
          <YouTube videoId="570deFTwGSk" opts={{ height: 420, width: "800" }} />
        </SwiperSlide>
        <SwiperSlide>
          <YouTube videoId="4yK0RYEwTDo" opts={{ height: 420, width: "800" }} />
        </SwiperSlide>
      </Swiper>
    </Stack>
  );
};
