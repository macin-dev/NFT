import { Container, Header } from "./";

export const Filter = ({ onToggle, onDropdown, dropdown }) => {
  return (
    <div className="inline-flex absolute top-0 right-0 bottom-0 left-0 pt-0 justify-center items-end bg-transparent-dark">
      <aside className="w-mobile absolute top-14 right-0 bottom-0 left-0 flex flex-col rounded-tl-2xl rounded-tr-2xl bg-white">
        <Header onToggle={onToggle} />
        <Container onDropdown={onDropdown} dropdown={dropdown} />
      </aside>
    </div>
  );
};
