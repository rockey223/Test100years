import "./App.css";
import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home";
import Level1 from "./components/Level1";


import Navbar from "./components/Navbar/Navbar";
import "./responsive.css";
import VideoPopUp from "./components/Helpers/VideoPopUp";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import SingleVideo from "./components/SingleVideo";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

import Upgrade from "./components/Upgrade/Upgrade";

import Account from "./components/Profile/Account";
import Contact from "./components/Contact/ContactUs";
import { ToastContainer } from "react-toastify";

import Checkout from "./components/checkout/Checkout";
import Auth from "./Auth";
import ProfileAboutMe from "./components/Bio/ProfileAboutMe"
import { useUser } from "./contexts/userDetails/userContext";

function App() {
  const { isloggedIn } = useUser();

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
 
  return (
    <div className="App">
      {openVideoPlayer ? (
        <VideoPopUp close={tooglePopup} details={popupDetails} />
      ) : null}


      
      <ToastContainer />
      {isloggedIn ? <Navbar /> : ""}

      <Routes>
        {isloggedIn ? (
          <Route path="/" element={<Home tooglePopup={tooglePopup} />} />
        ) : (
          <Route path="/" element={<Login />} />
        )}

        <Route element={<Auth />}>
          <Route path="/home" element={<Home tooglePopup={tooglePopup} />} />
          {/* <Route path="/" element={<Home tooglePopup={tooglePopup} />} /> */}
          <Route
            path="/level/:id"
            element={
              <Level1
                tooglePopup={tooglePopup}
                buyBanner={buyBanner}
                windowScroll={windowScroll}
              />
            }
          />
          {/* <Route
            path="/level/:id"
            element={
              <Level2
                tooglePopup={tooglePopup}
                buyBanner={buyBanner}
                windowScroll={windowScroll}
              />
            }
          /> */}
          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />
          <Route
            path="/singlevideo/:id"
            element={<SingleVideo tooglePopup={tooglePopup} />}
          />
          <Route path="/videoplayer/:id" element={<VideoPlayer />} />
          <Route path="/upgrade" element={<Upgrade />} />
          <Route path="/profile" element={<Account />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profileBio" element={<ProfileAboutMe  tooglePopup={tooglePopup}/>}/>
          {/* <Route path="*" element={<Login />} /> */}
        </Route>
      </Routes>
      {isloggedIn ? <Footer /> : ""}
    </div>
  );
}

export default App;

