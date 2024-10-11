import { Title, Form } from "./";

export const Content = ({ fileURL, onFile }) => {
  return (
    <section className="flex flex-col items-start gap-6 py-10 px-4 justify-center tablet:gap-[3.75rem] tablet:p-0 tablet:flex-grow desktop:w-[39rem] desktop:flex-grow-0">
      <Title />
      <Form fileURL={fileURL} onFile={onFile} />
    </section>
  );
};
