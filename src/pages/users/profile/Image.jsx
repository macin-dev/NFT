import { Avatar } from "./Avatar.jsx";

export const Image = ({ urlAvatar, bgURL }) => {
  return (
    <div className="h-40 self-stretch relative tablet:h-[13.75rem]">
      <img className="w-full h-full object-cover" src={bgURL} alt="" />
      <Avatar urlAvatar={urlAvatar} />
    </div>
  );
};
