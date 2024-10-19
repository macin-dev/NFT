import { DefaultAvatar } from "./DefaultAvatar";

export const AvatarImage = ({ onFile, fileURL }) => {
  return (
    <DefaultAvatar onFile={onFile}>
      <img
        className="rounded-2xl w-full h-full"
        src={fileURL}
        alt="Avtar image"
      />
    </DefaultAvatar>
  );
};
