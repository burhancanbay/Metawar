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
import MetawarImg1 from "../assets/images/metawar/0.png";
import MetawarImg2 from "../assets/images/metawar/1.png";
import MetawarImg3 from "../assets/images/metawar/2.png";
import MetawarImg4 from "../assets/images/metawar/3.png";
import MetawarImg5 from "../assets/images/metawar/4.png";
import MetawarImg6 from "../assets/images/metawar/5.png";
import MetawarImg7 from "../assets/images/metawar/6.png";
import MetawarImg8 from "../assets/images/metawar/7.png";
import MetawarImg9 from "../assets/images/metawar/8.png";
import MetawarImg10 from "../assets/images/metawar/9.png";
import MetawarImg11 from "../assets/images/metawar/10.png";
import MetawarImg12 from "../assets/images/metawar/11.png";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath: MetawarImg1,
  },
  {
    imgPath: MetawarImg2,
  },
  {
    imgPath: MetawarImg3,
  },
  {
    imgPath: MetawarImg4,
  },
  {
    imgPath: MetawarImg5,
  },
  {
    imgPath: MetawarImg6,
  },
  {
    imgPath: MetawarImg7,
  },
  {
    imgPath: MetawarImg8,
  },
  {
    imgPath: MetawarImg9,
  },
  {
    imgPath: MetawarImg10,
  },
  {
    imgPath: MetawarImg11,
  },
  {
    imgPath: MetawarImg12,
  },
];

export const MyCarousel = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

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
    <Box sx={{ maxWidth: 800, flexGrow: 1 }}>
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
      />
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: "block",
                  maxWidth: 800,
                  overflow: "hidden",
                  width: "100%",
                }}
                src={step.imgPath}
              />
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
