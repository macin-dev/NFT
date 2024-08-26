export const Desktop = () => {
  return (
    <>
      <div className="flex items-center gap-6 flex-grow shrink-0">
        <div>
          <img src="./assets/Union.svg" alt="Ultrarare Logo" />
        </div>
        <div className="w-[0.063rem] h-4 bg-light-border"></div>
        <ul className="flex items-center gap-6">
          <li className="text-light-element-secondary text-sm font-semibold tracking-[-0.013rem]">
            Explore
          </li>
          <li className="text-light-element-secondary text-sm font-semibold tracking-[-0.013rem]">
            Create
          </li>
          <li className="text-light-element-secondary text-sm font-semibold tracking-[-0.013rem]">
            Sell
          </li>
        </ul>
      </div>

      <div className="flex items-center justify-between py-3 pr-3 pl-4 rounded-xl flex-grow bg-light-surface-soft">
        <input
          className="w-full text-sm tracking-[-0.013rem] text-light-element-secondary bg-transparent"
          type="text"
          placeholder="Type for collections, NFTs etc"
        />
        <div className="p-1 flex items-center rounded-lg bg-light-surface-medium">
          <img src="./assets/icons/Command.svg" alt="Slash forward icon" />
        </div>
      </div>

      <div className="flex items-center gap-4 flex-grow shrink-0 justify-end">
        <button className="flex items-center justify-center h-11 py-3 px-5 rounded-xl tracking-[-0.013rem] text-sm bg-light-element-primary-btn text-white">
          Connect Wallet
        </button>

        <div className="flex p-[0.875rem] w-[3rem] h-[3rem] rounded-xl bg-light-surface-soft">
          <img src="./assets/icons/shopping-bag.svg" alt="shopping bag icon" />
        </div>

        <div className="flex p-1 gap-[0.063rem] rounded-2xl bg-light-surface-soft">
          <img
            className="p-3 flex items-center rounded-xl bg-white shadow-sm"
            src="./assets/icons/sun.svg"
            alt="son icon"
          />
          <img
            className="p-3 flex items-center rounded-xl"
            src="./assets/icons/moon.svg"
            alt="moon icon"
          />
        </div>
      </div>
    </>
  );
};
