export const Tab_unactive_sm = ({ unactive }) => {
  return (
    <div className="inline-flex h-[2.3125rem] py-2 px-3 items-center gap-2.5 shrink-0 rounded-xl bg-light-surface-soft">
      <p className="text-light-element-secondary text-[0.75rem] leading-4 tracking-default">
        {unactive}
      </p>
    </div>
  );
};
