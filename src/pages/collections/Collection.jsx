import CollectionAuthor from "../../components/feature-specific/collection-author-profile/CollectionAuthor.jsx";
import CollectionDetails from "./CollectionDetails.jsx";
import EmblaCarousel from "../../components/feature-specific/collection-carousel/EmblaCarousel.jsx";

const Collection = () => {
  return (
    <section className="bg-white border-light-border border flex flex-col p-4 items-start gap-6 self-stretch rounded-2xl">
      <CollectionAuthor />
      <CollectionDetails />
      <EmblaCarousel />
    </section>
  );
};

export default Collection;
