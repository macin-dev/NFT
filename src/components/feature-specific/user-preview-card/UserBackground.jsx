import { UserPhoto } from "./UserPhoto.jsx";

export const UserBackground = ({ bgUrl, avatarUrl }) => {
  return (
    <div className="w-[21.4375rem] h-[6.25rem] rounded-tl-xl rounded-tr-xl relative tablet:w-full">
      <img
        className="w-full h-full object-cover object-center rounded-tl-xl rounded-tr-xl "
        src={bgUrl}
        alt="Background Image"
      />
      <UserPhoto avatarUrl={avatarUrl} />
    </div>
  );
};
