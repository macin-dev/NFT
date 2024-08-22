import { DarkButton, Headline, Input, LightButton, Menu } from "./";

export const EnterProfile = () => {
  return (
    <div className="flex justify-center">
      <Menu />
      <div className="flex flex-col w-[23.438rem] h-[50.75rem] py-0 px-4 justify-center items-center gap-10 shrink-0 tablet:w-[35.938rem] tablet:h-[56.25rem] tablet:px-20">
        <Headline />

        <div className="flex flex-col items-start gap-6 self-stretch">
          <div className="flex flex-col items-start gap-1 self-stretch">
            <label
              className="text-base tracking-[-0.013rem] font-semibold text-light-element-primary"
              htmlFor="name"
            >
              Name
            </label>
            <Input type="text" id="name" placeholder="Enter name" />
          </div>
          <div className="flex flex-col items-start gap-1 self-stretch">
            <label
              className="text-base tracking-[-0.013rem] font-semibold text-light-element-primary"
              htmlFor="email"
            >
              Enter email addres
            </label>
            <Input type="email" id="email" placeholder="Enter email address" />
          </div>
        </div>

        <div className="flex flex-col items-start gap-3 self-stretch tablet:flex-row tablet:justify-center">
          <LightButton name="Cancel" />
          <DarkButton name="Finish" />
        </div>
      </div>
    </div>
  );
};
