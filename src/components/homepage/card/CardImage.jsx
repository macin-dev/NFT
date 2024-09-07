export const CardImage = ({ url }) => {
  return (
    <img
      className="flex p-2 flex-col justify-end items-center gap-2.5 flex-grow self-stretch rounded-xl tablet:h-[17.75rem] tablet:object-cover"
      src={`${url}`}
      alt="NFT Card Image"
    />
  );
};
