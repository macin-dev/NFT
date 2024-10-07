export const Upload = () => {
  return (
    <div className="flex flex-col items-start gap-1 h-[20rem] self-stretch">
      <h3 className="text-light-element-primary text-[1rem] leading-6 font-semibold tracking-default">
        Upload File
      </h3>
      <div className="pt-[0.5625rem] px-[0.5rem] pb-[0.5rem] flex-grow shrink-0 basis-0 self-stretch">
        <img
          className="w-full h-[17.1875rem] object-cover rounded-xl"
          src="/assets/home1.jpeg"
          alt="Item image"
        />
      </div>
    </div>
  );
};
