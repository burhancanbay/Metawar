import { Typography, Stack, Box, Link } from "@mui/material";
import TechImage1 from "../assets/images/poweredby/3dsmax.png";
import TechImage2 from "../assets/images/poweredby/aws.png";
import TechImage3 from "../assets/images/poweredby/blender.png";
import TechImage4 from "../assets/images/poweredby/bsc.png";
import TechImage5 from "../assets/images/poweredby/ipfs.png";
import TechImage6 from "../assets/images/poweredby/nodejs.png";
import TechImage7 from "../assets/images/poweredby/solidity.png";
import TechImage8 from "../assets/images/poweredby/ue.png";

export const Technologies = () => {
  return (
    <Stack
      sx={{ backgroundColor: "black" }}
      color="white"
      paddingTop={10}
      paddingLeft={10}
      paddingRight={10}
      paddingBottom={20}
    >
      <Stack paddingLeft={10} paddingRight={10} paddingBottom={10} spacing={2}>
        <Typography
          textAlign="center"
          color="orange"
          fontFamily="unset"
          fontSize={30}
        >
          TECHNOLOGIES
        </Typography>
      </Stack>
      <Stack spacing={14} direction="row">
        <Stack spacing={4}>
          <Link href="https://www.bnbchain.org/en" target="_blank">
            <img width="150px" src={TechImage4} />
          </Link>
          <Link href="https://nodejs.org/" target="_blank">
            {" "}
            <img width="150px" src={TechImage6} />
          </Link>
        </Stack>
        <Stack spacing={8}>
          <Link href="https://unrealengine.com/" target="_blank">
            <img width="150px" src={TechImage8} />
          </Link>
          <Link href="https://ipfs.tech/" target="_blank">
            <img width="150px" src={TechImage5} />
          </Link>
        </Stack>
        <Stack spacing={8}>
          <Link href="https://aws.amazon.com/" target="_blank">
            <img width="150px" src={TechImage2} />
          </Link>
          <Link href="https://www.autodesk.com/" target="_blank">
            <img width="150px" src={TechImage1} />
          </Link>
        </Stack>
        <Stack spacing={8}>
          <Link href="https://ethereum.org/" target="_blank">
            <img width="150px" src={TechImage7} />
          </Link>
          <Link href="https://www.blender.org/" target="_blank">
            <img width="150px" src={TechImage3} />
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
};
