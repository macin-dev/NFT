import { BlackButton_xl } from "../../components/global/button/BlackButton_xl";
import { Dropdown, InputText, TextArea } from "../../components/global/inputs";
import { InputUpload, MarketPlaceOptions, Unlockable } from ".";
import { useForm } from "../../helper/useForm";
import { chainIcons } from "./data";

export const Form = ({ fileURL, onFile }) => {
  const {
    form,
    handleToggle,
    handleOptionPrice,
    handleSubmit,
    handleInputChange,
  } = useForm({
    name: "",
    file: {
      fileURL,
    },
    description: "",
    putOnMarketplace: true,
    optionPrice: {
      fixed: true,
      timed: false,
    },
    price: "",
    unlockable: false,
    currencyType: "avalanche",
  });

  const handleBlockchainIcon = (name) => {
    return chainIcons.filter((obj) => obj.value === name);
  };

  const blockchainIcon = handleBlockchainIcon(form.currencyType).at(0);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-10 self-stretch tablet:items-end"
    >
      <InputUpload fileURL={fileURL} onFile={onFile} />
      <InputText
        onInputChange={handleInputChange}
        value={form.name}
        label="name"
      />
      <TextArea
        onInputChange={handleInputChange}
        value={form.description}
        label="description"
      />
      <MarketPlaceOptions
        value={form.putOnMarketplace}
        optionPrice={form.optionPrice}
        valueNumber={form.price}
        onInputChange={handleInputChange}
        onToggle={handleToggle}
        onPriceOption={handleOptionPrice}
      />
      <Unlockable value={form.unlockable} onToggle={handleToggle} />
      <Dropdown
        value={form.blockchain}
        onInputChange={handleInputChange}
        icon={blockchainIcon}
        label="Blockchain"
        options={chainIcons}
      />
      <BlackButton_xl value="Finish" />
    </form>
  );
};
