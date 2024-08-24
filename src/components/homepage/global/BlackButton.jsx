import { ArrowRight } from "../svg";

export const BlackButton = ({ content }) => {
  return (
    <button className="w-full flex items-center justify-center gap-2 text-sm font-normal h-11 py-3 px-5 rounded-xl tracking-[-0.012rem] bg-light-element-primary-btn text-white tablet:w-auto">
      {content}
      <ArrowRight currentColor="white" />
    </button>
  );
};
