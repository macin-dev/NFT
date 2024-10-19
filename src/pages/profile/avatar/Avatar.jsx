import { useState } from "react";
import { AvatarImage } from "./AvatarImage";
import { DefaultAvatar } from "./DefaultAvatar";

export const Avatar = () => {
  const [files, setFiles] = useState({
    profile_background: null,
    profile_avatar: null,
  });

  const handleFile = ({ target }) => {
    setFiles({
      ...files,
      [target.name]: URL.createObjectURL(target.files[0]),
    });
  };

  return (
    <div className="h-[14.125rem] self-stretch">
      <label
        htmlFor="profile_background"
        className="flex justify-end w-[21.4375rem] h-[11.25rem] p-2 shrink-0 bg-profile-default rounded-2xl relative"
      >
        {files.profile_background && (
          <img
            className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 rounded-2xl"
            src={files.profile_background}
            alt=""
          />
        )}
        {files.profile_avatar ? (
          <AvatarImage onFile={handleFile} fileURL={files.profile_avatar} />
        ) : (
          <DefaultAvatar onFile={handleFile} />
        )}

        <input
          onChange={handleFile}
          className="hidden w-0 h-0"
          type="file"
          name="profile_background"
          id="profile_background"
        />
      </label>
    </div>
  );
};
