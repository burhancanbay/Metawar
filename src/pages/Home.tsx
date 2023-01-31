import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import CopyIcon from "@mui/icons-material/CopyAll";
import GamepadIcon from "@mui/icons-material/Gamepad";

import { Typography, Stack, Button } from "@mui/material";
import { MyButton } from "../components/MyButton";

export const Home = () => {
  return (
    <Stack id="home">
      <Stack padding={5} spacing={4}>
        <Typography
          textAlign="center"
          color="orange"
          fontFamily="Marcellus SC"
          fontSize={50}
          fontWeight={600}
        >
          METAWAR
        </Typography>
        <Typography
          textAlign="center"
          color="white"
          fontFamily="serif"
          fontSize={30}
        >
          PLAY & EARN
        </Typography>
      </Stack>

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ padding: "10px" }}
      >
        <Stack direction="row" spacing={3}>
          <Button
            variant="outlined"
            size="small"
            href="https://t.me/MetaWarP2E"
            target="_blank"
            sx={{
              fontSize: "12px",
              fontFamily: "serif",
              width: 120,
              backgroundColor: "black",
              color: "white",
              border: "solid",
            }}
            startIcon={<TelegramIcon />}
          >
            telegram
          </Button>
          <Button
            variant="outlined"
            size="small"
            href="https://twitter.com/MetaWarP2E"
            target="_blank"
            sx={{
              fontSize: "12px",
              fontFamily: "serif",
              width: 120,
              border: "solid",
              bgcolor: "black",
              color: "white",
            }}
            startIcon={<TwitterIcon />}
          >
            twitter
          </Button>
        </Stack>
      </Stack>

      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ padding: "10px" }}
      >
        <Stack padding={2} spacing={1}>
          <Button
            variant="outlined"
            size="small"
            href="https://docs.metawar.studio/"
            target="_blank"
            sx={{
              fontSize: "12px",
              fontFamily: "fantasy",
              width: 120,
              border: "solid",
              bgcolor: "black",
              color: "orange",
            }}
            startIcon={<CopyIcon />}
          >
            whitepaper
          </Button>

          <Button
            variant="outlined"
            size="small"
            href="https://metawar.studio/game.html"
            target="_blank"
            sx={{
              fontSize: "12px",
              fontFamily: "fantasy",
              width: 120,
              border: "solid",
              bgcolor: "black",
              color: "orange",
            }}
            startIcon={<GamepadIcon />}
          >
            metaverse
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
