import { DarkButton, Headline, Input, LightButton, Menu } from "./";

export const EnterProfile = () => {
  return (
    <div>
      <Menu />
      <div className="flex flex-col w-[23.438rem] h-[812px] py-0 px-4 justify-center items-center gap-10 shrink-0">
        <Headline />

        <div className="flex flex-col items-start gap-6 self-stretch">
          <div className="flex flex-col items-start gap-1 self-stretch">
            <label className="text-base tracking-[-0.013rem]" htmlFor="name">
              Name
            </label>
            <Input type="text" id="name" placeholder="Enter name" />
          </div>
          <div className="flex flex-col items-start gap-1 self-stretch">
            <label className="text-base tracking-[-0.013rem]" htmlFor="name">
              Enter email addres
            </label>
            <Input type="email" id="email" placeholder="Enter email address" />
          </div>

          <div className="flex flex-col items-center gap-3 self-stretch">
            <LightButton name="Cancel" />
            <DarkButton name="Finish" />
          </div>
        </div>
      </div>
    </div>
  );
};
