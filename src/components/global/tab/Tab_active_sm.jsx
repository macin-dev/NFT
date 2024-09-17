export const Tab_active_sm = ({ active }) => {
  return (
    <div className="inline-flex h-[2.3125rem] py-2 px-3 items-center gap-2.5 shrink-0 rounded-xl shadow-sm bg-white">
      <p className="text-light-element-primary text-[0.75rem] font-medium leading-4 tracking-default">
        {active}
      </p>
    </div>
  );
};
