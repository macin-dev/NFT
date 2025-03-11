import { Crypto_Icon } from "./Crypto_Icon.jsx";

export const Selected = ({ value, url, alt, onSelected, select }) => {
  return (
    <button
      onClick={() => onSelected(select)}
      className="bg-light-surface-soft h-12 p-3 flex items-center gap-3 shrink-0 rounded-xl"
    >
      {url && <Crypto_Icon url={url} alt={alt} />}

      <span className="text-light-element-primary text-start text-sm tracking-default flex-grow shrink-0 basis-0">
        {value}
      </span>

      <div className="w-6 h-6 p-1 flex items-center justify-center rounded-lg shrink-0 bg-light-surface-medium">
        <img
          src="/assets/icons/check.svg"
          alt="Check Icon for selecting options"
        />
      </div>
    </button>
  );
};
