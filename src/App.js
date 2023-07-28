import "./App.css";
import { useState, useEffect } from "react";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home";
import Level1 from "./components/Level1";
import Level2 from "./components/Level2";
// import MidBanner from "./components/MIdBanner/MidBanner";
import Navbar from "./components/Navbar/Navbar";
import "./responsive.css";
import VideoPopUp from "./components/Helpers/VideoPopUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import SingleVideo from "./components/SingleVideo";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
// import Upgrade from "./components/Upgrade/Upgrade";
import Upgrade from "./components/Upgrade/Upgrade";
import axios from "axios";
function App() {
  const [openVideoPlayer, setOpenVideoPlayer] = useState(false);
  const [popupDetails, setPopupDetails] = useState();
  const tooglePopup = (videoItem, title) => {
    console.log(title);
    setPopupDetails(videoItem, title);
    setOpenVideoPlayer(!openVideoPlayer);
    console.log(videoItem);
  };

  const [buyBanner, setbuyBanner] = useState(0);
  const [windowScroll, setWindowScroll] = useState(0);
  const [prevWinScroll, setPrevWinScroll] = useState(0);

  window.addEventListener("scroll", function () {
    setbuyBanner(window.scrollY);
    setWindowScroll(window.scrollY - prevWinScroll);
    setPrevWinScroll(window.scrollY);
  });

  const [isloggedin, setIsloggedin] = useState(false);
  const [username, setUsername] = useState("");
  const [usermail, setUsermail] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/getMyInfo", {
        withCredentials: true,
      })
      .then((res) => {
        setIsloggedin(() => {
          return true;
        });
        setUsername(() => {
          return res.data.user.userFullName;
        });
        setUsermail(() => {
          return res.data.user.userEmail;
        });
        // console.log(res.data.user.userFullName);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      {openVideoPlayer ? (
        <VideoPopUp close={tooglePopup} details={popupDetails} />
      ) : null}
      <Router>
        <Navbar
          setIsloggedin={setIsloggedin}
          isloggedin={isloggedin}
          username={username}
          setUsername={setUsername}
          setUsermail={setUsermail}
          usermail={usermail}
        />
        <Routes>
          <Route path="/" element={<Home tooglePopup={tooglePopup} />} />
          <Route
            path="/level1"
            element={
              <Level1
                tooglePopup={tooglePopup}
                buyBanner={buyBanner}
                windowScroll={windowScroll}
              />
            }
          />
          <Route
            path="/level2"
            element={
              <Level2
                tooglePopup={tooglePopup}
                buyBanner={buyBanner}
                windowScroll={windowScroll}
              />
            }
          />
          <Route
            path="/login"
            element={<Login setIsloggedin={setIsloggedin} />}
          />
          <Route path="/signup" element={<Signup setIsloggedin={setIsloggedin} />} />
          <Route
            path="/singlevideo/:id"
            element={
              <SingleVideo tooglePopup={tooglePopup} isloggedin={isloggedin} />
            }
          />
          <Route path="/videoplayer/:id" element={<VideoPlayer />} />
          <Route path="/upgrade" element={<Upgrade />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
