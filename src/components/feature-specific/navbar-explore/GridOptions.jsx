import { useContext } from "react";
import { GridConfigContext } from "../../../context/GridConfigContext";

const gridSettings = ["gridCol4", "gridCol5", "gridCol4RandomDimensions"];

const GridOptions = () => {
  const { gridConfig, onGridConfig } = useContext(GridConfigContext);
  const { configID } = gridConfig;
  return (
    <div className="hidden p-1 gap-[0.0625rem] rounded-2xl bg-light-surface-soft tablet:flex">
      {gridSettings.map((setting, index) => (
        <button
          onClick={() => onGridConfig(setting)}
          key={index}
          className={`${
            configID === setting ? "bg-white" : null
          } flex items-center justify-center gap-2.5 p-2.5 rounded-xl shadow-sm desktop:w-12 desktop:h-12 desktop:py-3 desktop:px-4`}
        >
          <div className="flex items-center justify-center">
            <img
              src={`/assets/icons/layout${index + 1}.svg`}
              alt="Layout icon"
            />
          </div>
        </button>
      ))}
    </div>
  );
};

export default GridOptions;
