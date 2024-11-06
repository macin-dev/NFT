import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Content } from "./profile/Content";
import { Profile } from "./profile/Profile";
import { users } from "../../../data/users";

export const Layout = () => {
  const [userData, setUserData] = useState({});
  const { userID } = useParams();

  useEffect(() => {
    const getUserByID = (id) => {
      return users.filter((user) => user.id === Number(id))[0];
    };
    const user = getUserByID(userID);
    setUserData(user);
  }, [userID]);

  return (
    <section className="flex flex-col self-stretch mx-auto w-mobile tablet:w-tablet desktop:w-desktop">
      <Profile
        urlAvatar={userData.avatar}
        bgURL={userData.bgURL}
        username={userData.username}
      />
      <Content />
    </section>
  );
};
