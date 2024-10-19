import { Header, FilterItemsMenu } from "./";

export const Filter = ({ onToggle }) => {
  return (
    <div className="inline-flex absolute top-0 right-0 bottom-0 left-0 items-end bg-transparent-dark bg-red-300">
      <aside className="w-mobile absolute top-14 right-0 bottom-0 left-0 flex flex-col rounded-tl-2xl mx-auto rounded-tr-2xl bg-white">
        <Header onToggle={onToggle} />
        <FilterItemsMenu />
      </aside>
    </div>
  );
};
