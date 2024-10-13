import { BlackButton_lg } from "../../button";
import { Theme } from "../Theme";
import { MobileList } from "./MobileList";

export const MenuContent = () => {
  return (
    <section className=" bg-white flex items-end flex-col py-4 absolute z-30 top-14 right-0 bottom-0 left-0">
      <div className="flex justify-between px-3 pb-4 self-stretch">
        <BlackButton_lg path="/sing-up" value="Connect Wallet" />
        <Theme />
      </div>
      <div className="flex flex-col gap-4 items-start self-stretch">
        <MobileList />
      </div>
    </section>
  );
};
