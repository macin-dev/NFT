import { Description, SwitchToggle } from "./";

export const MarketPlaceOptions = ({ children, dispatch, value }) => {
  return (
    <div className="flex flex-col items-start gap-6 self-stretch">
      <div className="flex gap-2 self-stretch">
        <Description />
        <SwitchToggle
          value={value}
          dispatch={dispatch}
          name="putOnMarketplace"
        />
      </div>
      {children}
    </div>
  );
};
