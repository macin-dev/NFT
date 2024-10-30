import { SwitchToggle, UnlockableTitle } from "./";

export const Unlockable = ({ value, dispatch }) => {
  return (
    <div className="flex items-start gap-2 self-stretch">
      <UnlockableTitle />
      <SwitchToggle value={value} dispatch={dispatch} name="unlockable" />
    </div>
  );
};
