import { Tab } from "./";

export const Headline = () => {
  return (
    <div className="flex flex-col items-start gap-6 self-stretch">
      <img className="h-6" src="./assets/Union.svg" alt="Ultrarare" />
      <div className="flex flex-col items-start gap-2">
        <h2 className="text-light-element-primary text-2xl font-semibold leading-7 tracking-[-0.063rem]">
          Connect Wallet
        </h2>
        <p className="text-light-element-secondary text-sm font-normal leading-5 tracking-[-0.013rem]">
          Choose a wallet you want to connect. There are several wallet
          providers.
        </p>
      </div>
      <Tab />
    </div>
  );
};
