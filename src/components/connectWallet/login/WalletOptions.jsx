import { WalletItem } from "./";

const loginMethods = [
  {
    name: "Metamask",
    logo: "./assets/Metamask.svg",
  },
  {
    name: "Wallet Connect",
    logo: "./assets/WalletConnect.svg",
  },
  {
    name: "Coinbase",
    logo: "./assets/Coinbase.svg",
  },
];

export const WalletOptions = () => {
  return (
    <div className="flex flex-col items-start gap-5 self-stretch">
      {loginMethods.map((type) => (
        <WalletItem key={type.name} {...type} />
      ))}
      <div className="flex w-full h-[4.5rem] py-0 pr-5 pl-6 items-center gap-5 border-light-border border-[0.044rem] rounded-[1.25rem] bg-white">
        <h3 className="flex-grow flex-shrink-0 text-light-element-primary text-lg leading-6 font-medium tracking-[-0.013rem]">
          Show More
        </h3>
        <div className="w-6 h-6 flex items-center justify-center p-1 gap-2.5 rounded-lg bg-light-surface-medium">
          <img src="./assets/Icon-wrap.svg" alt="Icon Down" />
        </div>
      </div>
    </div>
  );
};
