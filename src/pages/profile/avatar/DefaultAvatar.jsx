export const DefaultAvatar = ({ children, onFile }) => {
  return (
    <label
      htmlFor="profile_avatar"
      className="w-[120px] h-[120px] shrink-0 rounded-2xl bg-avatar absolute left-6 -bottom-12"
    >
      {children}
      <input
        onChange={onFile}
        className="hidden h-0 w-0"
        type="file"
        name="profile_avatar"
        id="profile_avatar"
      />
    </label>
  );
};
