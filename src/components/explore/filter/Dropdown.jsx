export const Dropdown = ({ type }) => {
  return (
    <div className="flex justify-between items-center py-4 self-stretch">
      <h3 className="text-light-element-primary text-lg leading-6 tracking-default font-medium">
        {type}
      </h3>
      <div className="flex justify-center items-center p-1 w-6 h-6 rounded-lg bg-light-surface-medium">
        <img src="./assets/icons/chevron-down.svg" alt="Select icon" />
      </div>
    </div>
  );
};
