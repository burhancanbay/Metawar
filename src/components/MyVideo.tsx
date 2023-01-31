import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import YouTube from "react-youtube";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const MyVideo = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [autoplay, setAutoplay] = React.useState<boolean>(true);

  const onPlayerReady = React.useCallback(() => {
    console.log("ready!!");
  }, []);

  const onVideoPlay = React.useCallback(() => {
    console.log("video playing...");
    // waitUntil();

    setAutoplay(false);
  }, []);

  const onVideoPause = React.useCallback(() => {
    console.log("video pause");
    setAutoplay(true);
  }, []);

  const images = React.useMemo(
    () => [
      {
        label: "MetaWar | Characters & Guns",
        imgPath: (
          <YouTube
            videoId="1cLciJlZxp0"
            opts={{ height: 400, width: "100%" }}
            onReady={onPlayerReady}
            onPlay={onVideoPlay}
            onPause={onVideoPause}
          />
        ),
      },
      {
        label: "MetaWar | Gameplay Trailer",
        imgPath: (
          <YouTube
            videoId="S7u8JfRiOU8"
            opts={{ height: 400, width: "100%" }}
            onReady={onPlayerReady}
            onPlay={onVideoPlay}
            onPause={onVideoPause}
          />
        ),
      },
      {
        label: "MetaWar | Join The world war!",
        imgPath: (
          <YouTube
            videoId="kH2B5DIHpyk"
            opts={{ height: 400, width: "100%" }}
            onReady={onPlayerReady}
            onPlay={onVideoPlay}
            onPause={onVideoPause}
          />
        ),
      },

      {
        label: "MetaWar | Intro v2",
        imgPath: (
          <YouTube
            videoId="y9UKss3PlS4"
            opts={{ height: 400, width: "100%" }}
            onReady={onPlayerReady}
            onPlay={onVideoPlay}
            onPause={onVideoPause}
          />
        ),
      },

      {
        label: "Metawar | Comingsoon",
        imgPath: (
          <YouTube
            videoId="570deFTwGSk"
            opts={{ height: 400, width: "100%" }}
            onReady={onPlayerReady}
            onPlay={onVideoPlay}
            onPause={onVideoPause}
          />
        ),
      },
      {
        label: "Metawar | Trailer Part 2",
        imgPath: (
          <YouTube
            videoId="4yK0RYEwTDo"
            opts={{ height: 400, width: "100%" }}
            onReady={onPlayerReady}
            onPlay={onVideoPlay}
            onPause={onVideoPause}
          />
        ),
      },
    ],
    []
  );

  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 900, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        autoplay={autoplay}
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <div
                onClick={() => {
                  console.log("test");
                }}
              >
                {step.imgPath}
              </div>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
};
