import { useState } from "react";

export const SwitchToggle = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <label className="inline-block relative w-[2.875rem] h-6">
      <input
        onChange={() => setToggle(!toggle)}
        checked={toggle}
        className="h-0 w-0 opacity-0"
        type="checkbox"
      />
      <span
        className={`${
          toggle
            ? "bg-light-element-primary-btn before:translate-x-[1.3125rem]"
            : "bg-light-element-tertiary"
        } absolute cursor-pointer top-0 left-0 right-0 bottom-0 duration-[0.3s] rounded-[3.625rem] before:absolute before:content-[''] before:w-[1.3125rem] before:h-5 before:bottom-[0.125rem] before:left-[0.125rem] before:bg-white before:duration-[0.3s] before:rounded-[50%] `}
      />
    </label>
  );
};
