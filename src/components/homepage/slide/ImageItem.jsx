export const ImageItem = ({ url, title, text }) => {
  return (
    <div
      className={`${url} p-4 rounded-2xl flex flex-col justify-end items-start gap-1 w-[19.438rem] h-[20rem] tablet:w-[11.938rem] tablet:h-[12.75rem] desktop:w-[19.438rem] desktop:h-[20rem]`}
    >
      <h3 className="text-base font-semibold text-white tracking-[-0.013rem]">
        {title}
      </h3>
      <p className="text-sm leading-4 uppercase text-white">{text}</p>
    </div>
  );
};
