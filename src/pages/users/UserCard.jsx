import { UserBackground, UserInfo } from "./";

export const UserCard = ({ user, background, userID, username }) => {
  return (
    <div className="bg-white border-light-border w-[21.4375rem] flex flex-col self-stretch border-[0.7px] rounded-xl tablet:w-full">
      <UserBackground bgUrl={background} avatarUrl={user} />
      <UserInfo username={username} userID={userID} />
    </div>
  );
};
