export const Picture = ({ url, height }) => {
  return (
    <div className={`w-[10.625rem] ${height} rounded-2xl`}>
      <img
        className="rounded-2xl h-full object-cover"
        src={url}
        alt="Image of Hero"
      />
    </div>
  );
};
