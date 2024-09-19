import { Container, Header } from "./";

export const Filter = ({ onToggle, onDropdown, dropdown }) => {
  return (
    <div className="inline-flex absolute top-0 left-0 w-screen h-screen pt-20 justify-center items-end bg-transparent-dark">
      <aside className="w-mobile h-full flex flex-col rounded-tl-2xl rounded-tr-2xl bg-white">
        <Header onToggle={onToggle} />
        <Container onDropdown={onDropdown} dropdown={dropdown} />
      </aside>
    </div>
  );
};
