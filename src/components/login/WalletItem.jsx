export const WalletItem = ({ name, logo }) => {
  return (
    <div className="walletItem">
      <div>
        <img src={logo} alt={name} />
      </div>
      <h3>{name}</h3>
    </div>
  );
};
