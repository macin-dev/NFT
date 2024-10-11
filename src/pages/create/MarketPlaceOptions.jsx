import { InputSelect } from "../../components/global/inputs/InputSelect";
import { ButtonContainer, Description, SwitchToggle } from "./";

export const MarketPlaceOptions = ({
  value,
  onToggle,
  valueNumber,
  onInputChange,
  optionPrice,
  onPriceOption,
}) => {
  return (
    <div className="flex flex-col items-start gap-6 self-stretch">
      <div className="flex gap-2 self-stretch">
        <Description />
        <SwitchToggle
          switchToggle={value}
          onToggle={onToggle}
          name="putOnMarketplace"
        />
      </div>
      <ButtonContainer
        onPriceOption={onPriceOption}
        optionPrice={optionPrice}
      />
      <InputSelect
        value={valueNumber}
        onInputChange={onInputChange}
        numberName="price"
      />
    </div>
  );
};
