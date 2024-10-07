import { InputSelect } from "../../components/global/inputs/InputSelect";
import { Button, Description, SwitchToggle } from "./";

export const MarketPlaceOptions = () => {
  return (
    <div className="flex flex-col items-start gap-6 self-stretch">
      <div className="flex gap-2 self-stretch">
        <Description />
        <SwitchToggle />
      </div>

      <div className="flex items-start gap-4 self-stretch">
        <Button
          active={true}
          value="Fixed price"
          icon="/assets/icons/tag.svg"
        />
        <Button
          active={false}
          value="Timed auction"
          icon="/assets/icons/clock.svg"
        />
      </div>

      <InputSelect />
    </div>
  );
};
