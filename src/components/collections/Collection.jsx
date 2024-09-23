import { Data } from ".";
import { Avatar } from "../global/avatar/Avatar";
import { EmblaCarousel } from "./carousel/EmblaCarousel";

export const Collection = () => {
  return (
    <section className="bg-white border-light-border border flex flex-col p-4 items-start gap-6 self-stretch rounded-2xl">
      <Avatar />

      <Data />

      <EmblaCarousel />
    </section>
  );
};
