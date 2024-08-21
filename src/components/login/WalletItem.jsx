export const WalletItem = ({ name, logo }) => {
  return (
    <div className="w-full flex h-[4.5rem] pl-6 pr-5 items-center gap-5 rounded-[1.25rem] border-[0.044rem] border-light-border bg-white">
      <div>
        <img src={logo} alt={name} />
      </div>
      <h3 className="text-light-element-primary text-lg leading-6 tracking-[-0.013rem] rounded-[1.25rem] border-light-border bg-white">
        {name}
      </h3>
    </div>
  );
};
