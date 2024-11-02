import { useContext, useReducer } from "react";
import { Dropdown, InputText, TextArea } from "../../components/global/inputs";
import { BlackButton_xl } from "../../components/global/button/BlackButton_xl";
import {
  Preview,
  Title,
  Form,
  InputUpload,
  MarketPlaceOptions,
  Unlockable,
  PriceSelectionContainer,
} from "./";
import { InputSelect } from "../../components/global/inputs/InputSelect";
import { chainIcons } from "./data";
import { PreviewCard } from "../../components/global/nftcard";
import { CollectionContext } from "../../context/CollectionProvider";

const initialState = {
  url: null,
  name: "",
  description: "",
  putOnMarketplace: true,
  optionPrice: {
    fixed: true,
    timed: false,
  },
  price: "",
  unlockable: false,
  currencyType: "avalanche",
};

function reducer(state, action) {
  switch (action.type) {
    case "uploadFile":
      return { ...state, url: URL.createObjectURL(action.payload) };
    case "textInput":
      return { ...state, [action.payload.name]: action.payload.value };
    case "toggleInput":
      return { ...state, [action.payload]: !state[action.payload] };
    case "optionPrice":
      return {
        ...state,
        optionPrice: {
          fixed: false,
          timed: false,
          [action.payload]: !state[action.payload],
        },
      };
    default:
      throw new Error("Unknown type");
  }
}

export const Main = () => {
  const { onAddNewItem } = useContext(CollectionContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    url,
    name,
    description,
    putOnMarketplace,
    optionPrice,
    price,
    unlockable,
    currencyType,
  } = state;

  const handleBlockchainIcon = (name) => {
    return chainIcons.filter((obj) => obj.value === name);
  };

  const blockchainIcon = handleBlockchainIcon(currencyType).at(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddNewItem(state);
  };

  return (
    <section className="w-mobile mx-auto tablet:flex tablet:items-start tablet:gap-8 tablet:justify-center tablet:w-tablet tablet:py-20 tablet:px-10 desktop:w-desktop desktop:justify-end desktop:pr-[11.8125rem] desktop:pl-0">
      <section className="flex flex-col items-start gap-6 py-10 px-4 justify-center tablet:gap-[3.75rem] tablet:p-0 tablet:flex-grow desktop:w-[39rem] desktop:flex-grow-0">
        <Title />
        <Form onSubmit={handleSubmit}>
          <InputUpload dispatch={dispatch} value={url} />
          <InputText dispatch={dispatch} value={name} />
          <TextArea dispatch={dispatch} value={description} />
          <MarketPlaceOptions dispatch={dispatch} value={putOnMarketplace}>
            <PriceSelectionContainer dispatch={dispatch} value={optionPrice} />
            <InputSelect dispatch={dispatch} value={price} inputName="price" />
          </MarketPlaceOptions>
          <Unlockable value={unlockable} dispatch={dispatch} />
          <Dropdown
            value={currencyType}
            dispatch={dispatch}
            icon={blockchainIcon}
            options={chainIcons}
          />
          <BlackButton_xl onSubmit={onAddNewItem} value="Finish" />
        </Form>
        {/* Preview Item Component */}
      </section>

      {window.innerWidth >= 960 && (
        <Preview value={url}>
          <PreviewCard
            url="/assets/home2.jpeg"
            userName="Winter Madagascar"
            text={name}
            price={price}
            fileURL={url}
          />
        </Preview>
      )}
    </section>
  );
};
