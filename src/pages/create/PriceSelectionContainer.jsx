import { PriceSelection } from "./PriceSelection";

export const PriceSelectionContainer = ({ dispatch, value }) => {
  return (
    <div className="flex items-start gap-4 self-stretch">
      <PriceSelection
        name="fixed"
        dispatch={dispatch}
        active={value.fixed}
        value="Fixed price"
        icon="/assets/icons/tag.svg"
      />
      <PriceSelection
        name="timed"
        dispatch={dispatch}
        active={value.timed}
        value="Timed auction"
        icon="/assets/icons/clock.svg"
      />
    </div>
  );
};
