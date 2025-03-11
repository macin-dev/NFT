export const DefaultPreview = () => {
  return (
    <div className="bg-light-surface-soft absolute flex items-center justify-center top-[8px] right-[8px] bottom-[8px] left-[8px] rounded-xl">
      <img
        className="rounded-xl object-cover h-6 w-6"
        src="/assets/icons/image.svg"
        alt="Image icon"
      />
    </div>
  );
};
