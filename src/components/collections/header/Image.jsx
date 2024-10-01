import { Avatar } from "./Avatar";

export const Image = () => {
  return (
    <div className="h-40 self-stretch bg-[url('./assets/users/background1.jpeg')] bg-cover bg-center bg-no-repeat relative tablet:h-[13.75rem]">
      <Avatar />
    </div>
  );
};
