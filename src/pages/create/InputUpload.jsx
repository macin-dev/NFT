import { useState } from "react";
import { UploadOn, UploadOff } from "./";

export const InputUpload = () => {
  const [file, setFile] = useState(null);

  const handleFile = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="flex flex-col items-start gap-1 h-[20rem] self-stretch tablet:h-[37.3125rem]">
      <h3 className="text-light-element-primary text-[1rem] leading-6 font-semibold tracking-default">
        Upload File
      </h3>

      <div className="flex-grow shrink-0 basis-0 self-stretch relative">
        <label
          className="absolute left-0 top-0 bottom-0 right-0"
          htmlFor="file"
        >
          <input
            className="opacity-0 h-0 w-0"
            type="file"
            onChange={handleFile}
            id="file"
          />
          {file ? <UploadOn file={file} /> : <UploadOff />}
        </label>
      </div>
    </div>
  );
};
