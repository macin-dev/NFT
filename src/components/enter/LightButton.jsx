export const LightButton = ({ name }) => {
  return (
    <button className="h-14 py-[0.875rem] self-stretch rounded-xl bg-light-surface-secondary-btn text-light-element-primary text-lg leading-6 tracking-[-0.013rem] tablet:px-6 tablet:flex-grow">
      {name}
    </button>
  );
};
