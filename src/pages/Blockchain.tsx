import { Typography, Stack } from "@mui/material";

import AboutImage9 from "../assets/images/about/metawarpage3.png";
import AboutImage10 from "../assets/images/about/metawarpage4.png";

export const Blockchain = () => {
  return (
    <Stack padding={10} direction="row">
      <Stack direction="row" alignContent="center">
        <img
          style={{
            width: "200px",
            height: "400px",
            padding: "30px",
            borderRadius: "80px",
          }}
          src={AboutImage9}
        />
        <img
          style={{
            width: "200px",
            height: "400px",
            padding: "30px",
            borderRadius: "80px",
          }}
          src={AboutImage10}
        />
      </Stack>
      <Stack
        paddingLeft={10}
        paddingRight={20}
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
          BLOCKCHAIN INFRASTRUCTURE
        </Typography>
        <Typography>
          By adding a different dimension to traditional FPS game styles, the
          "Play to Earn" model is followed with the integration of Blockchain
          infrastructure and Web 3.0. In the blockchain ecosystem, the familiar
          gaming universe of users is preserved, creating a familiar the
          universe is presented. There are 3 different playtime classes offered
          in the form of individual, general team and special team.
        </Typography>
      </Stack>
    </Stack>
  );
};
