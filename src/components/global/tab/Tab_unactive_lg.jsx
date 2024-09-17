export const Tab_unactive_lg = ({ unactive }) => {
  return (
    <div className="inline-flex py-4 px-5 items-center gap-2.5 shrink-0 rounded-xl bg-light-surface-soft">
      <p className="text-light-element-secondary text-[1rem] leading-6 tracking-default">
        {unactive}
      </p>
    </div>
  );
};
