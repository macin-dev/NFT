export const ItemImage = ({ asset }) => {
  return (
    <div className="flex p-2 items-center">
      <img className="w-14 h-14 rounded-xl" src={asset} alt="item image" />
    </div>
  );
};
