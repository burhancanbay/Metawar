import {
  Box,
  Divider,
  Drawer,
  Link,
  Stack,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import Logo from "../assets/images/metaWarLogo.png";
import WalletIcon from "@mui/icons-material/Wallet";

const drawerWidth = 300;

export default function SideBar() {
  return (
    <Box
      sx={{ color: "white", width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open
      >
        <Box bgcolor="black" sx={{ color: "white" }} component="article">
          <Toolbar />

          <Divider />
          <Stack spacing={5} sx={{ width: 290, height: 700 }}>
            <Stack component="caption">
              <Link>
                <a href="#home" target="_blank">
                  <img
                    width="100px"
                    height="60px"
                    src={Logo}
                    alt="MetaWar logo"
                  />
                </a>
              </Link>
            </Stack>
            <Box component="caption">
              <Button
                sx={{ color: "white" }}
                startIcon={<WalletIcon />}
                href="#"
                variant="outlined"
              >
                CONNECT WALLET
              </Button>
            </Box>
            <Divider />
            <Stack
              color="inherit"
              fontSize={15}
              spacing={2}
              component="caption"
            >
              <Link underline="none" sx={{ color: "white" }} href="#home">
                HOME
              </Link>
              <Link underline="none" sx={{ color: "white" }} href="#download">
                DOWNLOAD
              </Link>
              <Link underline="none" sx={{ color: "white" }} href="#trailers">
                TRAILERS
              </Link>
              <Link underline="none" sx={{ color: "white" }} href="#maps">
                MAPS
              </Link>
              <Link
                underline="none"
                sx={{ color: "white" }}
                href="#information"
              >
                INFORMATION
              </Link>

              <Link underline="none" sx={{ color: "white" }} href="#token">
                TOKEN
              </Link>
              <Link underline="none" sx={{ color: "white" }} href="#ecosystem">
                ECOSYSTEM
              </Link>
              <Link underline="none" sx={{ color: "white" }} href="#roadmap">
                ROADMAP
              </Link>
              <Link underline="none" sx={{ color: "white" }}>
                NFT MARKETPLACE
              </Link>
            </Stack>
            <Stack color="orange" fontSize={0.01} component="caption">
              <Typography>
                &copy; MetaWar 2022 <br />
                All Rights Reserved
              </Typography>
            </Stack>
          </Stack>

          <Divider />
        </Box>
      </Drawer>
    </Box>
  );
}
