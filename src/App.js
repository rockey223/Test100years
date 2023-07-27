import "./App.css";
import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home";
import Level1 from "./components/Level1";
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

function App() {

  const [openVideoPlayer, setOpenVideoPlayer] = useState(false);
  const [popupDetails, setPopupDetails] = useState();
  const tooglePopup = (videoItem,title) => {
    console.log(title);
    setPopupDetails(videoItem,title);
    setOpenVideoPlayer(!openVideoPlayer);
    console.log(videoItem);
  };


  return (
    <div className="App">
      {openVideoPlayer ? (
        
            <VideoPopUp close={tooglePopup} details={popupDetails} />
          
      ) : null}
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home tooglePopup={tooglePopup} />} />
          <Route path="/level1" element={<Level1 tooglePopup={tooglePopup}/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/singlevideo/:id" element={<SingleVideo tooglePopup={tooglePopup}/>}/>
          <Route path="/videoplayer/:id" element={<VideoPlayer/>}/>
          <Route path="/upgrade" element={<Upgrade/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
