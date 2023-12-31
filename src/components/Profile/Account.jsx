import Profile from "./NavProfile";
import Header from "./Header";
import "./account.css";
import { useEffect } from "react";

const Account = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header
        heading="Account"
        headingtext="Edit your account setting and password here."
      />
      <Profile />
    </>
  );
};
export default Account;
