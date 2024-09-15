import { Picture } from ".";

export const Group = () => {
  return (
    <section className="flex justify-center gap-2 w-[21.875rem] h-[24.25rem]">
      <div className="flex flex-col gap-1.5 mt-3.5">
        <Picture url="./assets/home1.jpeg" height="h-[12.3125rem]" />
        <Picture url="./assets/home4.jpeg" height="h-[10.625rem]" />
      </div>
      <div className="flex flex-col gap-2.5 tablet:gap-5">
        <Picture url="./assets/home2.jpeg" height="h-[10.625rem]" />
        <Picture url="./assets/home3.jpeg" height="h-[13rem]" />
      </div>
    </section>
  );
};
