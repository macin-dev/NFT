import { BlackButton, WhiteButton } from "../global";

export const ButtonContainer = () => {
  return (
    <div className="flex flex-col gap-4 items-center w-full tablet:col-start-1 tablet:col-span-1 tablet:flex-row tablet:w-[21.625rem]">
      <BlackButton content="Create your own" />
      <WhiteButton content="Start exploring" />
    </div>
  );
};
