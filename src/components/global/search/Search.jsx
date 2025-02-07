import PropTypes from "prop-types";
import { Command, Input } from "./";

export const Search = ({ placeholder }) => {
  return (
    <div className="flex flex-grow self-stretch shrink-0 basis-0 text-[1rem] items-center justify-between py-3 pr-3 pl-4 rounded-xl bg-light-surface-soft">
      <Input placeholder={placeholder} />
      <Command />
    </div>
  );
};

Search.propTypes = {
  placeholder: PropTypes.string,
};
