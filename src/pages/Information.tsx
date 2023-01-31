import { Typography, Stack, Box, Grid, Link } from "@mui/material";

import AboutImage from "../assets/images/about/about.png";
import AboutImage1 from "../assets/images/about/bsc.png";
import AboutImage2 from "../assets/images/about/coinmarketcap.svg";
import AboutImage3 from "../assets/images/about/pancakeSwap.png";
import AboutImage4 from "../assets/images/about/pinksale.png";
import AboutImage5 from "../assets/images/about/poocoin.png";

export const Information = () => {
  return (
    <Stack
      id="information"
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
        ABOUT
      </Typography>
      <Stack direction="row">
        <Grid md={9}>
          A blockchain-based role-play shooting game with a collection of
          weapons for player to equip, upgrade level to complete mission and
          earn NFT & tokens.
          <br />
          <br />
          Players can have a gun collection,build map to fight.
          <br />
          <br />
          MetaWar is a first-person shooter project that can be used as a basis
          to develop your own FPS project with any ideas.
          <br />
          <br />
          It includes many features essential for modern multiplayer FPS games,
          objects such as weapons, characters, projectiles, shells, explosions,
          game modes and much more
        </Grid>
        <Grid md={3}>
          <img width="100%" src={AboutImage} />
        </Grid>
      </Stack>
      <Stack spacing={30} direction="row">
        <Link href="https://coinmarketcap.com/" target="_blank">
          <img width="250px" src={AboutImage2} />
        </Link>
        <Link href="https://pancakeswap.finance/" target="_blank">
          <img width="250px" src={AboutImage3} />
        </Link>
      </Stack>
      <Stack spacing={30} direction="row">
        <Link
          paddingLeft={5}
          href="https://www.pinksale.finance/"
          target="_blank"
        >
          <img width="200px" src={AboutImage4} />
        </Link>
        <Link
          href="https://poocoin.app/tokens/0xd9fc762e2d1899aad7233de46ff9a36d034c4ffb"
          target="_blank"
        >
          <img width="250px" src={AboutImage5} />
        </Link>
      </Stack>
      <Stack spacing={30} direction="row">
        <Link
          paddingLeft={15}
          href="https://www.binance.com/en"
          target="_blank"
        >
          <img width="75px" src={AboutImage1} />
        </Link>
        <Box>
          <Typography
            paddingLeft={8}
            color="orange"
            fontSize={30}
            fontFamily="serif"
          >
            Contract Address
          </Typography>
          <Typography variant="subtitle2" paddingRight={100}>
            0xd9fC762E2D1899aAD7233De46FF9A36D034c4FFB
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
};
