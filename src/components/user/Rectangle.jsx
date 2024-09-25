import { Avatar } from "./Avatar";

export const Rectangle = ({ bgUrl, avatarUrl }) => {
  return (
    <div
      className={`bg-[url('${bgUrl}')] w-[21.4375rem] h-[6.25rem] bg-cover bg-center bg-no-repeat ${bgUrl} rounded-tl-xl rounded-tr-xl relative tablet:w-full`}
    >
      <Avatar avatarUrl={avatarUrl} />
    </div>
  );
};
