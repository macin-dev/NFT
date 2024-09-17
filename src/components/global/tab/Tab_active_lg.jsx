export const Tab_active_lg = ({ active }) => {
  return (
    <div className="inline-flex py-4 px-5 items-center gap-2.5 shrink-0 rounded-xl shadow-sm bg-white">
      <p className="text-light-element-primary text-[1rem] leading-6 font-medium tracking-default">
        {active}
      </p>
    </div>
  );
};
