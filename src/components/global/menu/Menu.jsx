import { Desktop } from "./Desktop";

export const Menu = () => {
  return (
    <div className="py-3 px-4 flex justify-between items-center target:py-5 tablet:px-10 desktop:px-20">
      <Desktop />
    </div>
  );
};
