import { Typography, Stack } from "@mui/material";

import TokenImage1 from "../assets/images/token/card1.jpg";
import TokenImage2 from "../assets/images/token/card2.jpg";
import TokenImage3 from "../assets/images/token/card3.jpg";

export const Token = () => {
  return (
    <Stack
      id="token"
      color="white"
      paddingTop={10}
      paddingLeft={10}
      paddingRight={10}
      paddingBottom={5}
    >
      <Stack paddingLeft={10} paddingRight={10} paddingBottom={10} spacing={2}>
        <Typography
          textAlign="center"
          color="orange"
          fontFamily="unset"
          fontSize={30}
        >
          METAWAR / BSC
        </Typography>
      </Stack>
      <Stack spacing={2} direction="row" alignContent="center">
        <div
          style={{
            backgroundImage: `url(${TokenImage2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "400px",
            height: "120px",
            padding: "10px",
          }}
        >
          <h2 style={{ textAlign: "center" }}>Total Supply </h2>

          <h3 style={{ textAlign: "center" }}>100.000.000</h3>
          <h4 style={{ textAlign: "center" }}> MetaWar</h4>
        </div>
        <div
          style={{
            backgroundImage: `url(${TokenImage1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "400px",
            height: "120px",
            padding: "10px",
          }}
        >
          <h2 style={{ textAlign: "center" }}>Current Price</h2>
        </div>
        <div
          style={{
            backgroundImage: `url(${TokenImage3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "400px",
            height: "120px",
            padding: "10px",
          }}
        >
          <h2 style={{ textAlign: "center" }}>MarketCap</h2>
        </div>
      </Stack>
    </Stack>
  );
};
