export const Type = ({ blockchain, url }) => {
  return (
    <li className="flex h-12 p-3 gap-3 items-center self-stretch rounded-xl bg-white">
      <div className="w-6 h-6">
        <img src={url} alt="Type Blockchain icon" />
      </div>
      <span className="text-light-element-secondary text-sm tracking-default flex-grow shrink-0 basis-0">
        {blockchain}
      </span>
    </li>
  );
};
