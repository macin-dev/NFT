export const UploadOn = ({ file }) => {
  return (
    <div className="absolute top-0 right-0 bottom-0 left-0 pt-[0.5625rem] px-[0.5rem] pb-[0.5rem]">
      <img
        className="w-full h-[17.1875rem] object-cover rounded-xl"
        src={file}
        alt="Item image"
      />
    </div>
  );
};
