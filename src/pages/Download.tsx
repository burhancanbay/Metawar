import { Button, Typography, Box, Stack, Link } from "@mui/material";

import DownloadIcon from "@mui/icons-material/Download";
import { MyButton } from "../components/MyButton";

export const Download = () => {
  return (
    <Stack
      paddingTop={10}
      width={1000}
      component="center"
      spacing={4}
      color="white"
      id="download"
    >
      <Stack fontFamily="monospace" fontSize={20}>
        DOWNLOAD THE CLOSED BETA VERSION AND START THE GAME
      </Stack>
      <Typography paragraph fontStyle="italic">
        Limited Time!!!
      </Typography>
      <Box>
        <Button
          variant="contained"
          size="large"
          href="https://drive.google.com/file/d/1TjU0mYWDLv2v_H-sNwjetZvl8ROZCY96/view?usp=sharing"
          target="_blank"
          sx={{
            fontSize: "12px",
            fontFamily: "serif",
            width: 150,
            backgroundColor: "black",
            color: "white",
            border: "solid",
          }}
          startIcon={<DownloadIcon />}
        >
          download
        </Button>
      </Box>
    </Stack>
  );
};
