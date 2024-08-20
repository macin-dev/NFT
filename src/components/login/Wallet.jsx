import { WalletItem } from "./walletItem";

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

export const Wallet = () => {
  return (
    <div>
      <div>
        <h2>Connect Wallet</h2>
        <p>
          Choose a wallet you want to connect. There are several wallet
          providers.
        </p>
        <div>
          <ul>
            <li>Ethereum</li>
            <li>Solana</li>
            <li>Tezos</li>
            <li>Polygon</li>
          </ul>
        </div>
      </div>
      <div className="walletContainer">
        {loginMethods.map((type) => (
          <WalletItem key={type.name} {...type} />
        ))}

        <div className="walletItem walletShow">
          <h3>Show More</h3>
          <div>
            <img src="./assets/Icon-wrap.svg" alt="Icon Down" />
          </div>
        </div>
      </div>
    </div>
  );
};
