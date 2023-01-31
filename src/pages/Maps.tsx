import { Typography, Stack } from "@mui/material";

import { MySwiper } from "../components/MySwiper";

export const Maps = () => {
  return (
    <Stack
      id="maps"
      paddingLeft={20}
      paddingRight={20}
      paddingTop={10}
      paddingBottom={20}
      spacing={10}
      color="white"
    >
      <Typography
        textAlign="center"
        color="orange"
        fontFamily="unset"
        fontSize={30}
      >
        METAWAR MAPS
      </Typography>

      <MySwiper />
    </Stack>
  );
};
