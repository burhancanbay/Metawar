import { Box, Divider, imageListClasses, Stack, Toolbar } from "@mui/material";
import SideBar from "./components/Sidebar";
import { Home } from "./pages/Home";
import { Trailers } from "./pages/Trailers";
import { Maps } from "./pages/Maps";
import { Information } from "./pages/Information";
import { Download } from "./pages/Download";
import { Token } from "./pages/Token";
import { Ecosystem } from "./pages/Ecosystem";
import { Roadmap } from "./pages/Roadmap";
import BGVideo from "./assets/metawar.mp4";
import BGImage from "./assets/images/metawar/12.png";
import { War } from "./pages/War";
import { Attack } from "./pages/Attack";
import { Users } from "./pages/Users";
import { Blockchain } from "./pages/Blockchain";
import { Rich } from "./pages/Rich";
import { Technologies } from "./pages/Technologies";

export default function App() {
  return (
    <div>
      <SideBar />
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          left: 300,

          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundImage: `url(${BGImage})`,
        }}
      >
        <div style={{ position: "relative" }}>
          <video
            autoPlay
            muted
            playsInline
            id="myVideo"
            style={{
              right: 0,
              bottom: 0,
              width: "100%",
              height: "100vh",
              objectFit: "cover",
            }}
          >
            <source src={BGVideo} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Home />
            <Download />
          </div>
        </div>

        <Trailers />
        <div style={{ backgroundColor: "black", height: "60px" }} />
        <Maps />
        <div style={{ backgroundColor: "black", height: "60px" }} />
        <Information />
        <div style={{ backgroundColor: "black", height: "60px" }} />
        <War />
        <div style={{ backgroundColor: "black", height: "60px" }} />
        <Attack />
        <div style={{ backgroundColor: "black", height: "60px" }} />
        <Users />
        <div style={{ backgroundColor: "black", height: "60px" }} />
        <Blockchain />
        <div style={{ backgroundColor: "black", height: "60px" }} />
        <Rich />
        <div style={{ backgroundColor: "black", height: "60px" }} />
        <Token />

        <Ecosystem />
        <Technologies />
        <Roadmap />
      </div>
    </div>
  );
}
