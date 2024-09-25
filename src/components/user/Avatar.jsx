export const Avatar = ({ avatarUrl }) => {
  return (
    <img
      className="w-14 h-14 rounded-[1.75rem] border-2 border-white object-cover absolute -bottom-4 left-3.5"
      src={avatarUrl}
      alt="User avatar"
    />
  );
};
