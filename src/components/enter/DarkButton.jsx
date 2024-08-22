export const DarkButton = ({ name }) => {
  return (
    <button className="h-14 py-[0.875rem] self-stretch rounded-xl bg-light-element-primary-btn text-white text-lg leading-6 tracking-[-0.013rem] tablet:px-6 tablet:flex-grow">
      {name}
    </button>
  );
};
