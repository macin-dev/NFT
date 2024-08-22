import { DarkButton, Field, Headline, LightButton, Menu } from "./";

export const EnterProfile = () => {
  return (
    <div className="flex justify-center">
      <Menu />
      <div className="flex flex-col w-[23.438rem] h-[50.75rem] py-0 px-4 justify-center items-center gap-10 shrink-0 tablet:w-[35.938rem] tablet:h-[56.25rem] tablet:px-20 desktop:w-[43.063rem]">
        <Headline />

        <div className="flex flex-col items-start gap-6 self-stretch">
          <Field type="text" id="name" name="Name" placeholder="Enter name" />
          <Field
            type="text"
            id="email"
            name="Enter email address"
            placeholder="Enter email address"
          />
        </div>

        <div className="flex flex-col items-start gap-3 self-stretch tablet:flex-row tablet:justify-center">
          <LightButton name="Cancel" />
          <DarkButton name="Finish" />
        </div>
      </div>
    </div>
  );
};
