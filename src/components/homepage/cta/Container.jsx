import { CCard } from "./CCard";

export const Container = () => {
  return (
    <div className="flex flex-col w-[23.4375rem] py-[3.75rem] px-4 bg-cta__component tablet:w-[60rem] tablet:p-10 desktop:p-20 desktop:w-[90rem]">
      <CCard />
    </div>
  );
};
