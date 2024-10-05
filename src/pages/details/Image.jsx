export const Image = ({ itemURL }) => {
  return (
    <div className="w-[21.3125rem] h-[17.5rem] rounded-2xl tablet:w-[26.5rem] tablet:h-[29.625rem] desktop:w-[31.25rem] desktop:h-[32.1875rem]">
      <img
        className="w-full h-full object-cover rounded-2xl"
        src={itemURL}
        alt="Item"
      />
    </div>
  );
};
