import { InputSelect } from "../../components/global/inputs/InputSelect";
import { ButtonContainer, Description, SwitchToggle } from "./";

export const MarketPlaceOptions = () => {
  return (
    <div className="flex flex-col items-start gap-6 self-stretch">
      <div className="flex gap-2 self-stretch">
        <Description />
        <SwitchToggle switchToggle={true} />
      </div>
      <ButtonContainer />
      <InputSelect />
    </div>
  );
};
