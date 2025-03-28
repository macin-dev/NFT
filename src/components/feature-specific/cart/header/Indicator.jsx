export const Indicator = ({ cartLength }) => {
  return (
    <div className="bg-light-element-primary flex w-8 h-8 items-center justify-center rounded-2xl">
      <span className="text-white text-center font-semibold text-sm tracking-default">
        {cartLength}
      </span>
    </div>
  );
};
