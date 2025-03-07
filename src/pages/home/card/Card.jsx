import EmblaCarousel from "./EmblaCarousel.jsx";
import { Paragraph } from "./Paragraph.jsx";
import Button from "../../../components/common/button/Button.jsx";
import ButtonIcon from "../../../components/common/button/ButtonIcon.jsx";

export const Card = () => {
  return (
    <section className="bg-white flex w-[23.438rem] py-[3.75rem] px-4 flex-col items-center gap-2.5 tablet:w-[60rem] tablet:p-10 desktop:w-[90rem] desktop:p-20 mx-auto">
      <div className="flex flex-col w-[21.313rem] py-10 px-6 justify-center items-start gap-8 rounded-3xl bg-light-surface-purple overflow-hidden tablet:py-16 tablet:pl-10 tablet:pr-0 tablet:items-center tablet:gap-8 tablet:self-stretch tablet:rounded-3xl tablet:border-light-border tablet:w-full tablet:h-[27.5rem] tablet:flex-wrap desktop:pl-16">
        <div className="flex flex-col items-start gap-8 self-stretch tablet:gap-10">
          <Paragraph />
          <Button size="large" color="black" path="/explore" value="Explore">
            <ButtonIcon srcIcon="/assets/icons/light-arrow-right.svg" />
          </Button>
        </div>
        <EmblaCarousel />
      </div>
    </section>
  );
};
