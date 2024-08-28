export const Search = () => {
  return (
    <div className="w-[26.625rem] flex items-center justify-between py-3 pr-3 pl-4 rounded-xl bg-light-surface-soft">
      <input
        className="w-full text-sm tracking-[-0.013rem] outline-none text-light-element-secondary bg-transparent"
        type="text"
        placeholder="Type for collections, NFTs etc"
      />
      <div className="p-1 flex items-center rounded-lg bg-light-surface-medium">
        <img src="./assets/icons/Command.svg" alt="Slash forward icon" />
      </div>
    </div>
  );
};
