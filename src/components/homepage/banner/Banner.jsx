import { ButtonContainer, ImagesContainer, RedRectangle, Title } from ".";

export const Banner = () => {
  return (
    <section className="relative tablet:h-[440px] desktop:h-[550px] flex justify-center ">
      <div className="flex flex-col justify-center items-start gap-14 py-[3.75rem] px-4 w-mobile tablet:relative tablet:grid tablet:w-[60rem] target:grid-cols-2 tablet:justify-between tablet:gap-y-12 tablet:gap-x-10 tablet:pl-10 tablet:overflow-visible desktop:w-[90rem] desktop:pl-20 desktop:gap-x-12 desktop:h-[34.375rem]">
        <Title />
        <ButtonContainer />
        <ImagesContainer />
        <RedRectangle />
      </div>
    </section>
  );
};
