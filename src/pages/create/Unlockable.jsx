import { SwitchToggle, UnlockableTitle } from "./";

export const Unlockable = () => {
  return (
    <div className="flex items-start gap-2 self-stretch">
      <UnlockableTitle />
      <SwitchToggle />
    </div>
  );
};
