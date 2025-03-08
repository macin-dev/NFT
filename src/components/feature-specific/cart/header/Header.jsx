import { CloseBtn } from "./CloseBtn.jsx";
import { Indicator } from "./Indicator.jsx";

export const Header = ({ onClickCart, cartLength }) => {
  return (
    <div className="flex items-center p-4 gap-2.5 self-stretch">
      <div className="flex gap-2.5 items-center flex-grow shrink-0 basis-0">
        <h4 className="text-light-element-primary text-2xl font-semibold leading-7">
          Cart
        </h4>
        <Indicator cartLength={cartLength} />
      </div>

      <CloseBtn onClickCart={onClickCart} />
    </div>
  );
};
