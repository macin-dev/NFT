import { Banner } from "./banner";
import { Card } from "./card";
import { CTA } from "./cta";
import { Details } from "./details";
import { EmblaCarousel } from "./slide/EmblaCarousel";
import { Trending } from "./trending";

export const Home = () => {
  return (
    <>
      <Banner />
      <EmblaCarousel />
      <Trending />
      <Details />
      <Card />
      <CTA />
    </>
  );
};
