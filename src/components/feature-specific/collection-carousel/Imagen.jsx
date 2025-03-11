export const Imagen = ({ url }) => {
  return (
    <div className="w-[13.75rem] h-full flex shrink-0 items-center justify-center self-stretch">
      <img
        className="w-full h-full tablet:object-cover tablet:h-[12.5rem] rounded-xl"
        src={url}
        alt="CollectionAuthor card"
      />
    </div>
  );
};
