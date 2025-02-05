import ClassicTab from "../../tab/classic/ClassicTab";

export const Tab = () => {
  return (
    <div className="flex flex-col p-4 gap-4 tablet:px-10 tablet:py-6 desktop:px-20 desktop:py-10 desktop:gap-8">
      <div className="flex self-stretch">
        <ClassicTab size="small" isActive={true} length={3.4}>
          Owned
        </ClassicTab>
        <ClassicTab size="small" isActive={false} length={44}>
          On Sale
        </ClassicTab>
      </div>
    </div>
  );
};
