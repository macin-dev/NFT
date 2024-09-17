import { Header, List } from "./";

export const Filter = ({ onToggle }) => {
  return (
    <div className="inline-flex absolute top-0 left-0 w-screen h-screen justify-center items-end bg-transparent-dark overflow-hidden">
      <aside className="w-mobile flex flex-col h-[45.875rem] rounded-tl-2xl rounded-tr-2xl bg-white">
        <Header onToggle={onToggle} />
        <List />
      </aside>
    </div>
  );
};
