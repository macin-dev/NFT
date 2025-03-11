export const RenderImage = ({ fileURL }) => {
  return (
    <img
      className="rounded-xl object-cover h-full w-full"
      src={fileURL}
      alt="NFT Avatar"
    />
  );
};
