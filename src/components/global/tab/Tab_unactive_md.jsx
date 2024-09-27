export const Tab_unactive_md = ({ unactive, value, onTabs }) => {
  return (
    <button
      onClick={() => onTabs(value)}
      className="inline-flex flex-grow py-3 px-4 items-center justify-center gap-2.5 shrink-0 rounded-xl basis-0 bg-light-surface-soft"
    >
      <p className="text-light-element-secondary text-sm tracking-default">
        {unactive}
      </p>
    </button>
  );
};
