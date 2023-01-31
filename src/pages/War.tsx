import { Typography, Stack } from "@mui/material";

import AboutImage6 from "../assets/images/about/metawarpage00.png";

export const War = () => {
  return (
    <Stack direction="row">
      <Stack
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
          WAR
        </Typography>
        <Typography>
          Guilty; woman, child, does not care for the elderly. And politicians
          are in the middle of the danger. From your neck where danger lurks at
          every step, the breath of death During this period when he did not
          leave, no one was left by the Assassination Squad. can't escape!
        </Typography>
      </Stack>
      <Stack alignContent="center">
        <img
          style={{ padding: "30px", borderRadius: "80px" }}
          src={AboutImage6}
        />
      </Stack>
    </Stack>
  );
};
