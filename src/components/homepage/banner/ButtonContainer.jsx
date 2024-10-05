import { BlackButton_lg, WhiteButton_lg } from "../../global/button";
import { BlackButton } from "../global";

export const ButtonContainer = () => {
  return (
    <div className="flex flex-col gap-4 items-center w-full tablet:col-start-1 tablet:col-span-1 tablet:flex-row tablet:w-[21.625rem] z-20">
      {/* <BlackButton content="Create your own" /> */}
      <BlackButton_lg
        value="Create your own"
        icon="/assets/icons/light-arrow-right.svg"
      />
      <WhiteButton_lg
        value="Start Exploring"
        icon="/assets/icons/arrow-right.svg"
        path="/explore"
      />
    </div>
  );
};
