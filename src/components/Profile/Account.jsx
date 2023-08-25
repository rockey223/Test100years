import Profile from "./NavProfile";
import Header from "./Header";
import "./account.css";

const Account = () => {
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
