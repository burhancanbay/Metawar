import { Typography, Stack, Box, ImageList, Grid } from "@mui/material";

import AboutImage8 from "../assets/images/about/metawarpage2.png";

export const Users = () => {
  return (
    <Stack direction="row" paddingBottom={20}>
      <Stack>
        <Stack
          paddingLeft={10}
          paddingRight={10}
          paddingTop={10}
          spacing={6}
          color="white"
        >
          <Typography
            textAlign="center"
            color="orange"
            fontFamily="unset"
            fontSize={25}
          >
            USERS IN THE INDIVIDUAL GAME CLASS, THE GAME IS EVALUATED ACCORDING
            TO THE "KILL" SCORES IN IT..
          </Typography>
        </Stack>
        <Stack>
          <Stack paddingLeft={10} paddingRight={10} spacing={6} color="white">
            <Typography>
              They have to be stopped. Only death can Every week on Monday at
              00.10 UTC, the "kill" score of users is reset and does not roll
              over to the next week. In the general team and special
              classifications, the scores of the teams are determined according
              to the number of games they have won. The leaderboard is examined
              and each On Monday of the week at 11.30 UTC the leaderboard is
              published on the platform. Based on 5% of the number of users in
              the leaderboard, the first place is eligible for $USDT prize.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack alignContent="center">
        <img
          style={{
            width: "400px",
            height: "300px",
            padding: "100px",
            borderRadius: "80px",
          }}
          src={AboutImage8}
        />
      </Stack>
    </Stack>
  );
};
