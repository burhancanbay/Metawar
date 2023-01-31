import { Typography, Stack } from "@mui/material";
import AboutImage11 from "../assets/images/about/metawarpage5.png";

export const Rich = () => {
  return (
    <Stack direction="row">
      <Stack
        paddingLeft={20}
        paddingRight={10}
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
          RICH ARMING
        </Typography>
        <Typography>
          METAWAR, which has a lot of weapons in it, It will meet all your needs
          with its variety. It will help lift you to the top.
        </Typography>
        <ul>
          <li>Long Barrel Weapons</li>
          <li>Submachine Guns</li>
          <li>Submachine Guns</li>
          <li>Sniper Rifles</li>
        </ul>
      </Stack>
      <Stack alignContent="center">
        <img
          style={{ padding: "80px", borderRadius: "100px" }}
          src={AboutImage11}
        />
      </Stack>
    </Stack>
  );
};
