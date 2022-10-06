import { useContext } from "react";
import { LoggedInUserContext } from "../../contexts/LoggedInUserContext";

const Profile = () => {
  const loggedInUserContext = useContext(LoggedInUserContext);
  const user = loggedInUserContext.user;

  return (
    <>
      <div>{user?.name}</div>
    </>
  );
};

export default Profile;
