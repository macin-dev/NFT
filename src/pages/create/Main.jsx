import { TextArea } from "../../components/global/inputs";
import { InputText } from "../../components/global/inputs/InputText";
import { Upload, Title } from "./";
import { MarketPlaceOptions } from "./MarketPlaceOptions";

export const Main = () => {
  return (
    <section className="w-mobile flex flex-col items-start gap-6 py-10 px-4 justify-center">
      <Title />
      <div className="flex flex-col gap-10 self-stretch">
        <Upload />
        <InputText value="name" />
        <TextArea value="description" />
        <MarketPlaceOptions />
      </div>
    </section>
  );
};
