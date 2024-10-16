import { Body } from "./body/Body";
import { Header } from "./header/Header";

export const Cart = ({ onClickCart }) => {
  return (
    <section className="flex justify-center items-end absolute top-0 right-0 bottom-0 left-0 bg-transparent-dark z-30">
      <div className="bg-white absolute top-14 right-0 bottom-0 left-0 flex flex-col rounded-tl-2xl rounded-tr-2xl flex-grow shrink-0 basis-0 shadow-md">
        <Header onClickCart={onClickCart} />
        <Body />
      </div>
    </section>
  );
};
