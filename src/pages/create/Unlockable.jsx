import { SwitchToggle, UnlockableTitle } from "./";

export const Unlockable = ({ value, onToggle }) => {
  return (
    <div className="flex items-start gap-2 self-stretch">
      <UnlockableTitle />
      <SwitchToggle
        switchToggle={value}
        onToggle={onToggle}
        name="unlockable"
      />
    </div>
  );
};
