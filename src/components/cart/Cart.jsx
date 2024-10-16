import { Body } from "./body/Body";
import { Header } from "./header/Header";

export const Cart = ({ onClickCart }) => {
  return (
    <section className="flex justify-center items-end absolute top-0 right-0 bottom-0 left-0 bg-transparent-dark z-30 tablet:pt-[88px] tablet:px-6 tablet:pb-6 tablet:justify-end overflow-hidden">
      <div className="bg-white w-mobile absolute top-14 right-0 bottom-0 left-0 flex flex-col rounded-tl-2xl rounded-tr-2xl flex-grow shrink-0 basis-0 shadow-md mx-auto tablet:flex-grow-0 tablet:basis-[364px] tablet:static tablet:h-full tablet:mx-0 tablet:rounded-2xl desktop:basis-[461px]">
        <Header onClickCart={onClickCart} />
        <Body />
      </div>
    </section>
  );
};
