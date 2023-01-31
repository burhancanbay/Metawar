import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import AddLinkOutlinedIcon from "@mui/icons-material/AddLinkOutlined";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "../CSS/mySwiper.css";

// import required modules
import { Autoplay, EffectCube, Pagination } from "swiper";
import { Stack, Typography } from "@mui/material";

export const Ecosystem = () => {
  return (
    <Stack id="ecosystem">
      <Stack color="white" paddingTop={10} paddingRight={30}>
        <Stack
          paddingLeft={40}
          paddingRight={10}
          paddingBottom={10}
          spacing={2}
        >
          <Typography
            textAlign="center"
            color="orange"
            fontFamily="unset"
            fontSize={30}
          >
            ECOSYSTEM
          </Typography>
        </Stack>
      </Stack>

      <Stack
        paddingLeft={35}
        justifyContent="center"
        alignItems="center"
        paddingBottom={20}
        sx={{ height: "400px", width: "600px" }}
      >
        <Swiper
          effect={"cube"}
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={true}
          modules={[Autoplay, EffectCube, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Stack
              paddingTop={9}
              paddingLeft={9}
              paddingRight={9}
              sx={{ bgcolor: "black" }}
              justifyContent="center"
              alignItems="center"
            >
              <AllInclusiveIcon sx={{ fontSize: 80, color: "white" }} />

              <h2 style={{ color: "white" }}>Unlimited Award</h2>
              <br />
              <h4 style={{ color: "white" }}>
                Can have valuable NFTs with play to earn mechanism
              </h4>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack
              paddingTop={9}
              paddingLeft={9}
              paddingRight={9}
              sx={{ bgcolor: "black" }}
              justifyContent="center"
              alignItems="center"
            >
              <AddLinkOutlinedIcon sx={{ fontSize: 80, color: "white" }} />

              <h2 style={{ color: "white" }}>Incredible Atmosphere</h2>
              <br />
              <h4 style={{ color: "white" }}>
                The maps and atmospheres we create with extremely graphic
                quality double the enjoyment of the game.
              </h4>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack
              paddingTop={9}
              paddingLeft={9}
              paddingRight={9}
              sx={{ bgcolor: "black" }}
              justifyContent="center"
              alignItems="center"
            >
              <WhatshotOutlinedIcon sx={{ fontSize: 80, color: "white" }} />

              <h2 style={{ color: "white" }}>Catchy Battles</h2>
              <br />
              <h4 style={{ color: "white" }}>
                Metawar is player-friendly with its powerful mechanics
              </h4>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack
              paddingTop={9}
              paddingLeft={9}
              paddingRight={9}
              sx={{ bgcolor: "black" }}
              justifyContent="center"
              alignItems="center"
            >
              <WarehouseOutlinedIcon sx={{ fontSize: 80, color: "white" }} />

              <h2 style={{ color: "white" }}>NFT Marketplace</h2>
              <br />
              <h4 style={{ color: "white" }}>
                You can buy game items from NFT Market or sell the items you
                have earned.
              </h4>
            </Stack>
          </SwiperSlide>
        </Swiper>
      </Stack>
    </Stack>
  );
};
