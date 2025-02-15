import Button from "../../common/button/Button.jsx";
import ButtonIcon from "../../common/button/ButtonIcon.jsx";

const customSize = {fontSize: 14, padding: "8px 16px", borderRadius: "8px", height: "100%"}

export const Suscribe = () => {
  return (
    <div className="flex flex-col gap-10 py-6 justify-center self-stretch border-t border-b border-t-light-border border-b-light-border tablet:flex-row tablet:py-10">
      <div className="flex flex-col gap-3 flex-grow flex-shrink-0 self-stretch">
        <p className="text-light-element-primary text-lg leading-6 tracking-[-0.0125rem] font-medium">
          Join our newsletter
        </p>
        <p className="text-light-element-secondary text-[1rem] leading-6 tracking-[-0.0125rem]">
          Keep up to date with us
        </p>
      </div>

      <div className="flex items-start gap-3 self-stretch h-10 tablet:w-[26.75rem]">
        <input
          className="bg-light-surface-soft flex-grow flex-shrink-0 self-stretch p-4 py-2 rounded-lg text-[1rem] mobile:basis-[233px] tablet:basis-auto"
          placeholder="Enter your email address"
          type="text"
        />
          <Button color="black" value="Submit" customSize={customSize} >
              <ButtonIcon srcIcon="/assets/icons/light-arrow-right.svg" />
          </Button>
      </div>
    </div>
  );
};
