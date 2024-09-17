export const Tab_active_md = ({ active }) => {
  return (
    <div className="inline-flex flex-grow py-3 px-4 items-center justify-center gap-2.5 shrink-0 basis-0 rounded-xl shadow-sm bg-white">
      <p className="text-light-element-primary text-sm font-medium tracking-default">
        {active}
      </p>
    </div>
  );
};
