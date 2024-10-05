export const Buttons = () => {
  return (
    <div className="flex gap-3 self-stretch">
      <button className="bg-light-surface-soft flex items-center py-2.5 px-4 gap-2 rounded-xl">
        <img
          className="w-5 h-5"
          src="/assets/icons/share.svg"
          alt="Share icon"
        />
        <p className="text-light-element-secondary text-sm tracking-default">
          Share
        </p>
      </button>

      <button className="bg-light-surface-soft flex items-center py-2.5 px-4 gap-2 rounded-xl">
        <img
          className="w-5 h-5"
          src="/assets/icons/refresh.svg"
          alt="Share icon"
        />
        <p className="text-light-element-secondary text-sm tracking-default">
          Refresh metadata
        </p>
      </button>

      <button className="bg-light-surface-soft flex justify-center items-center w-10 h-10 p-2.5 rounded-xl">
        <img src="/assets/icons/more-vertical.svg" alt="More options icon" />
      </button>
    </div>
  );
};
