import { Crypto_Icon } from "./Crypto_Icon.jsx";

export const Unselected = ({ value, url, alt, select, onSelected }) => {
  return (
    <button
      onClick={() => onSelected(select)}
      className="bg-white h-12 p-3 flex items-center gap-3 shrink-0 rounded-xl"
    >
      {url && <Crypto_Icon url={url} alt={alt} />}

      <span className="text-light-element-secondary text-start text-sm tracking-default flex-grow shrink-0 basis-0">
        {value}
      </span>
    </button>
  );
};
