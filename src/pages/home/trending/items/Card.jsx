import { Detail, Profile } from "./index.js";

export const Card = () => {
  return (
    <div className="flex flex-col w-[21.438rem] gap-6 p-4 items-start border-[0.031rem] border-light-border bg-white rounded-xl">
      <Profile />
      <Detail />
    </div>
  );
};
