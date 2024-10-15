export const ItemBody = () => {
  return (
    <div className="flex items-center gap-1 py-3 px-2 flex-grow shrink-0 basis-0">
      <div className="flex flex-col items-start gap-1 flex-grow shrink-0 basis-0">
        <h5 className="text-light-element-primary text-[1rem] font-semibold leading-6 tracking-default">
          Whistle Ape
        </h5>
        <span className="text-light-element-secondary text-sm tracking-default">
          Winter Madagascar
        </span>
      </div>

      <div className="flex items-start gap-1">
        <h5 className="text-light-element-primary text-[1rem] font-semibold leading-6 tracking-default">
          0.005
        </h5>
        <span className="text-light-element-secondary text-[1rem] leading-6 tracking-default">
          ETH
        </span>
      </div>
    </div>
  );
};