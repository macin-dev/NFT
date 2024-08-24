import { ArrowRight } from "../svg";

export const WhiteButton = ({ content }) => {
  return (
    <button className="w-full flex items-center justify-center gap-2 text-sm font-normal h-11 py-3 px-5 rounded-xl tracking-[-0.012rem] bg-light-surface-secondary-btn text-light-element-primary tablet:w-auto">
      {content}
      <ArrowRight currentColor="#252525" />
    </button>
  );
};
