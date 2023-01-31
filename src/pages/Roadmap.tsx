import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { Stack, Typography, Box, Link } from "@mui/material";
import MetaLogo from "../assets/images/metaWarLogo.png";

export const Roadmap = () => {
  return (
    <Stack id="roadmap">
      <Stack color="white" paddingTop={10} paddingRight={30}>
        <Stack
          paddingLeft={40}
          paddingRight={10}
          paddingBottom={10}
          spacing={2}
        >
          <Typography
            textAlign="center"
            color="orange"
            fontFamily="unset"
            fontSize={30}
          >
            ROADMAP
          </Typography>
        </Stack>
        <Timeline>
          <TimelineItem>
            <TimelineOppositeContent>Q3-2022</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="warning" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              Closed-Beta Release
              <br />
              IDO
              <br />
              DEX
              <br />
              ------------------------------------------------------------
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>Q4-2022</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="warning" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              Beta Version Release
              <br />
              NFT Sale
              <br />
              ------------------------------------------------------------
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>Q1-2023</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="warning" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              CEX Listing
              <br />
              NFT Marketplace
              <br />
              MetaWar Metaverse Universe Opening
              <br />
              ------------------------------------------------------------
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>Q2-2023</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="warning" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              Full 3D models
              <br />
              Release new nft: map, weapon skin
              <br />
              Weapon upgrade feature
              <br />
              ------------------------------------------------------------
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>Q3-2023</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="warning" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              Participation in Game Fairs
              <br />
              E-Sports Deals
              <br />
              ------------------------------------------------------------
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>Q4-2023</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="warning" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              Global Physical Competition Events
              <br />
              MetaWar Release
              <br />
              ------------------------------------------------------------
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Stack>
      <Stack
        sx={{ bgcolor: "black" }}
        direction="row"
        spacing={75}
        color="white"
        paddingTop={10}
      >
        <Box fontSize={14} paddingLeft={10} paddingBottom={5}>
          &copy; MetaWar 2022. All Rights Reserved
          <Stack spacing={2} direction="row" m={2}>
            <Link href="#">Terms of Service</Link>

            <Link href="#">Privacy Policy</Link>
          </Stack>
        </Box>

        <Box paddingRight={12} paddingBottom={5}>
          <img width="100px" src={MetaLogo} />
        </Box>
      </Stack>
    </Stack>
  );
};
