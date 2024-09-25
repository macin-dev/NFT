export const BlackButton_lg = ({ value, icon }) => {
  return (
    <button className="bg-light-element-primary-btn inline-flex h-9 py-2 px-4 items-center justify-center gap-2 shrink-0 self-stretch rounded-lg">
      {value && <p className="text-white text-sm tracking-default">{value}</p>}
      <img src={icon} alt="Button" />
    </button>
  );
};
