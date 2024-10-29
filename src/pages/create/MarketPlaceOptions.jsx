import { Description, SwitchToggle } from "./";

export const MarketPlaceOptions = ({ children, value, onToggle }) => {
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
      {children}
    </div>
  );
};
