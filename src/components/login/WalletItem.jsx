export const WalletItem = ({ name, logo }) => {
  return (
    <div className="w-full flex h-[72px] pl-6 pr-5 items-center gap-5 rounded-[20px] border-[0.7px] border-light-border bg-white">
      <div>
        <img src={logo} alt={name} />
      </div>
      <h3 className="text-light-element-primary text-lg leading-6 tracking-[-0.2px] rounded-[20px] border-light-border bg-white">
        {name}
      </h3>
    </div>
  );
};
