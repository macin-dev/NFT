export const BlackButton_xl = ({ value, icon, grow = "", stretch = "" }) => {
  return (
    <button
      className={`bg-light-element-primary-btn inline-flex h-[3.5rem] py-4 px-6 items-center justify-center gap-2 shrink-0 rounded-xl ${grow} ${stretch}`}
    >
      {value && (
        <p className="text-white text-lg leading-6 tracking-default">{value}</p>
      )}
      {icon && <img src={icon} alt="Button" />}
    </button>
  );
};
