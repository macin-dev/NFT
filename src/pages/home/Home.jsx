import { Banner } from "./banner/index.js";
import { Card } from "./card/index.js";
import { CTA } from "./cta/index.js";
import { Details } from "./details/index.js";
import { Trending } from "./trending/index.js";
import EmblaCarousel from "../../components/common/slide/EmblaCarousel.jsx";

const Home = () => {
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

export default Home;