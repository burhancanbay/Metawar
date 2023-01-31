import { Typography, Stack } from "@mui/material";

import AboutImage7 from "../assets/images/about/metawarpage1.png";

export const Attack = () => {
  return (
    <Stack>
      <Stack
        paddingLeft={20}
        paddingRight={20}
        paddingTop={10}
        spacing={6}
        color="white"
      >
        <Typography
          textAlign="center"
          color="orange"
          fontFamily="unset"
          fontSize={30}
        >
          ATTACK
        </Typography>
      </Stack>
      <Stack direction="row">
        <Stack
          paddingLeft={10}
          paddingRight={10}
          paddingTop={10}
          spacing={6}
          color="white"
        >
          <Typography>
            They have to be stopped. Only death can stop the embodiment of
            death. It is time for the Chaos Law Enforcement to return to duty.
            Will the bells of danger ring or will it be silent? Choose your side
            and be a part of this battle!"
          </Typography>
          <Stack direction="row" paddingBottom={20} spacing={4} color="white">
            <Typography>
              Eiffel Tower Attack
              <br />
              <br />
              -70 dead, 200 wounded.
              <br />
              <br />
              Galata Explosion
              <br />
              <br />
              -13 dead, 300 injured.
            </Typography>
            <Typography>
              London Mayhem
              <br />
              <br />
              -300 dead, number of wounded unknown.
              <br />
              <br />
              So what's next?
              <br />
              <br />
              -They have to be stopped.
            </Typography>
          </Stack>
        </Stack>
        <Stack alignContent="center">
          <img
            style={{
              width: "400px",
              height: "300px",
              padding: "50px",
              borderRadius: "80px",
            }}
            src={AboutImage7}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};
