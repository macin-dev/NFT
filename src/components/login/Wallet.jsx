import { WalletOptions, Headline } from ".";

export const Wallet = () => {
  return (
    <div className="flex flex-col py-10 px-4 items-center gap-10">
      <Headline />
      <WalletOptions />
    </div>
  );
};
