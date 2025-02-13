import Button from "../../common/button/Button.jsx";
import ButtonIcon from "../../common/button/ButtonIcon.jsx";

export const ButtonContainer = () => {
  return (
    <div className="flex flex-col gap-4 items-center w-full tablet:col-start-1 tablet:col-span-1 tablet:flex-row tablet:w-[21.625rem] z-20">
        <Button value="Create your own" color="black" size="large" path="/create">
            <ButtonIcon srcIcon="/assets/icons/light-arrow-right.svg" />
        </Button>
        <Button value="Start Exploring" color="white" size="large" path="/explore">
            <ButtonIcon srcIcon="/assets/icons/arrow-right.svg" />
        </Button>
    </div>
  );
};
