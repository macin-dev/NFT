export const ThirdTab = () => {
  return (
    <div className="flex p-1 items-stat gap-[0.063rem] self-stretch rounded-2xl bg-light-surface-soft">
      <div className="w-full h-9 flex items-center justify-center py-2 px-3 flex-grow bg-white rounded-xl shadow-sm">
        <img src="./assets/icons/ethereum.svg" alt="" />
      </div>
      <div className="w-full h-9 flex items-center justify-center py-2 px-3 flex-grow">
        <img src="./assets/icons/polygon.svg" alt="" />
      </div>
      <div className="w-full h-9 flex items-center justify-center py-2 px-3 flex-grow">
        <img src="./assets/icons/tezos.svg" alt="" />
      </div>
      <div className="w-full h-9 flex items-center justify-center py-2 px-3 flex-grow">
        <img src="./assets/icons/immutable.svg" alt="" />
      </div>
    </div>
  );
};
