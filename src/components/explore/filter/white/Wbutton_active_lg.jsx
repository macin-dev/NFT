export const Wbutton_active_lg = ({ value }) => {
  return (
    <button className="bg-light-surface-secondary-btn h-12 inline-flex justify-center items-center py-3 px-5 self-stretch rounded-xl">
      <p className="text-light-element-primary text-sm tracking-default">
        {value}
      </p>
    </button>
  );
};
