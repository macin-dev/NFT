import { useState } from "react";
import { Content, Preview } from "./";

export const Main = () => {
  const [file, setFile] = useState(null);

  const handleFile = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <section className="w-mobile mx-auto tablet:flex tablet:items-start tablet:gap-8 tablet:justify-center tablet:w-tablet tablet:py-20 tablet:px-10 desktop:w-desktop desktop:justify-end desktop:pr-[11.8125rem] desktop:pl-0">
      <Content fileURL={file} onFile={handleFile} />
      {window.innerWidth >= 960 && <Preview fileURL={file} />}
    </section>
  );
};
