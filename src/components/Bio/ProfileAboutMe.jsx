import Header from "./Header";
import AboutMe from "./AboutMe";
import Courses from "../Helpers/Courses";

// import { useUser } from "../../contexts/userDetails/userContext";
import { useVideo } from "../../contexts/VideoDetails/videoContext";

function ProfileAboutMe({tooglePopup}) {

  const { level1Videos, level2Videos } = useVideo();

  const allVideos = [...level1Videos,...level2Videos];
 

  return (
    <>
      <div className="main-profile-container">
        <Header heading="Profile" />
        <AboutMe />
      </div>
      <div className="Profile-bio-heading">
        <p>

        My Courses
        </p>
      </div>
      <Courses tooglePopup={tooglePopup} videos={allVideos} />
    </>
  );
}
export default ProfileAboutMe;
