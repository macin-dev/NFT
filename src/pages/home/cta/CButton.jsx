export const CButton = () => {
  return (
    <button className="flex h-10 py-3 px-5 items-center justify-center gap-2 self-stretch rounded-xl bg-light-element-primary-btn tablet:self-start">
      <p className="text-sm tracking-[-0.2px] text-white">Get started</p>
      <div className="flex items-center justify-center w-6 h-6 p-1">
        <img
          src="/assets/icons/light-arrow-right.svg"
          alt="Arrow Right Icon"
        />
      </div>
    </button>
  );
};
