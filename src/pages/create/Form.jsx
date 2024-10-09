import { BlackButton_xl } from "../../components/global/button/BlackButton_xl";
import { Dropdown, InputText, TextArea } from "../../components/global/inputs";
import { InputUpload, MarketPlaceOptions, Unlockable } from ".";

export const Form = () => {
  return (
    <div className="flex flex-col gap-10 self-stretch tablet:items-end">
      <InputUpload />
      <InputText value="name" />
      <TextArea value="description" />
      <MarketPlaceOptions />
      <Unlockable />
      <Dropdown icon={true} value="Ethereum" label="Blockchain" />
      <Dropdown icon={false} value="No collection" label="Choose collection" />
      <BlackButton_xl value="Finish" />
    </div>
  );
};
