import { Button } from "./Button";

export const ButtonContainer = () => {
  return (
    <div className="flex items-start gap-4 self-stretch">
      <Button active={true} value="Fixed price" icon="/assets/icons/tag.svg" />
      <Button
        active={false}
        value="Timed auction"
        icon="/assets/icons/clock.svg"
      />
    </div>
  );
};
