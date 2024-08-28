export const Theme = () => {
  return (
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
  );
};
