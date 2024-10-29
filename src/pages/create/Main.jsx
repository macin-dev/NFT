import { useState } from "react";
import { Dropdown, InputText, TextArea } from "../../components/global/inputs";
import { BlackButton_xl } from "../../components/global/button/BlackButton_xl";
import {
  Preview,
  Title,
  Form,
  InputUpload,
  MarketPlaceOptions,
  Unlockable,
  ButtonContainer,
} from "./";
import { InputSelect } from "../../components/global/inputs/InputSelect";
import { chainIcons } from "./data";

export const Main = () => {
  const [fileItem, setFileItem] = useState(null);
  const [createItem, setCreateItem] = useState({
    name: "",
    description: "",
    putOnMarketplace: true,
    optionPrice: {
      fixed: true,
      timed: false,
    },
    price: 0,
    unlockable: false,
    currencyType: "avalanche",
  });

  const handleInputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setCreateItem({
      ...createItem,
      [inputName]: inputValue,
    });
  };

  const handleFile = (e) => {
    setFileItem(URL.createObjectURL(e.target.files[0]));
  };

  const handleOptionPrice = (name, value) => {
    const optionPrice = {
      fixed: false,
      timed: false,
    };
    setCreateItem({
      ...createItem,
      optionPrice: {
        ...optionPrice,
        [name]: value,
      },
    });
  };

  const handleToggle = (name, value) => {
    setCreateItem({
      ...createItem,
      [name]: value,
    });
  };

  const handleBlockchainIcon = (name) => {
    return chainIcons.filter((obj) => obj.value === name);
  };

  const blockchainIcon = handleBlockchainIcon(createItem.currencyType).at(0);

  return (
    <section className="w-mobile mx-auto tablet:flex tablet:items-start tablet:gap-8 tablet:justify-center tablet:w-tablet tablet:py-20 tablet:px-10 desktop:w-desktop desktop:justify-end desktop:pr-[11.8125rem] desktop:pl-0">
      <section className="flex flex-col items-start gap-6 py-10 px-4 justify-center tablet:gap-[3.75rem] tablet:p-0 tablet:flex-grow desktop:w-[39rem] desktop:flex-grow-0">
        <Title />
        <Form>
          <InputUpload fileURL={fileItem} onFile={handleFile} />
          <InputText
            onInputChange={handleInputChange}
            value={createItem.name}
            label="name"
          />
          <TextArea
            onInputChange={handleInputChange}
            value={createItem.description}
            label="description"
          />
          <MarketPlaceOptions
            value={createItem.putOnMarketplace}
            onToggle={handleToggle}
          >
            <ButtonContainer
              onPriceOption={handleOptionPrice}
              optionPrice={createItem.optionPrice}
            />
            <InputSelect
              onInputChange={handleInputChange}
              numberName="price"
              value={createItem.price}
            />
          </MarketPlaceOptions>
          <Unlockable value={createItem.unlockable} onToggle={handleToggle} />
          <Dropdown
            value={createItem.currencyType}
            onInputChange={handleInputChange}
            icon={blockchainIcon}
            label="Blockchain"
            options={chainIcons}
          />
          <BlackButton_xl value="Finish" />
        </Form>
        {/* Preview Item Component */}
      </section>
      {window.innerWidth >= 960 && <Preview fileURL={fileItem} />}
    </section>
  );
};
