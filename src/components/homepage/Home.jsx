import { Banner } from "./banner";
import { Card } from "./card";
import { CTA } from "./cta";
import { Details } from "./details";
import { Trending } from "./trending";
import EmblaCarousel from "../common/slide/EmblaCarousel.jsx";

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
