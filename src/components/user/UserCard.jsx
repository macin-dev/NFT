import { Info, Rectangle } from "./";

export const UserCard = ({ user, background }) => {
  return (
    <div className="bg-white border-light-border w-[21.4375rem] flex flex-col self-stretch border-[0.7px] rounded-xl tablet:w-full">
      <Rectangle bgUrl={background} avatarUrl={user} />
      <Info />
    </div>
  );
};
