import { Button } from "./Button";

export const ButtonContainer = ({ optionPrice, onPriceOption }) => {
  return (
    <div className="flex items-start gap-4 self-stretch">
      <Button
        name="fixed"
        onPriceOption={onPriceOption}
        active={optionPrice.fixed}
        value="Fixed price"
        icon="/assets/icons/tag.svg"
      />
      <Button
        name="timed"
        onPriceOption={onPriceOption}
        active={optionPrice.timed}
        value="Timed auction"
        icon="/assets/icons/clock.svg"
      />
    </div>
  );
};
