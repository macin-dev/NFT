export const Layout = () => {
  return (
    <div className="hidden p-1 gap-[0.0625rem] rounded-2xl bg-light-surface-soft tablet:flex">
      {Array.from({ length: 3 }, (_, index) => (
        <button
          key={index}
          className="flex items-center justify-center gap-2.5 p-2.5 rounded-xl shadow-sm bg-white"
        >
          <div className="flex items-center justify-center">
            <img
              src={`./assets/icons/layout${index + 1}.svg`}
              alt="Layout icon"
            />
          </div>
        </button>
      ))}
    </div>
  );
};
