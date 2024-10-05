import { Buttons, Owner, Buy } from "./";

export const Card = () => {
  return (
    <div className="flex flex-col items-start gap-6 self-stretch tablet:gap-10 tablet:flex-grow tablet:shrink-0 tablet:basis-0">
      <Owner />
      <Buttons />
      <Buy />
    </div>
  );
};
