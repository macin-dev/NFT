import { EmblaCarousel } from "./carousel/EmblaCarousel";
import CollectionAuthor from "../feature-specific/collection-author-profile/CollectionAuthor.jsx";
import CollectionDetails from "./CollectionDetails.jsx";

export const Collection = () => {
  return (
    <section className="bg-white border-light-border border flex flex-col p-4 items-start gap-6 self-stretch rounded-2xl">
      <CollectionAuthor />
      <CollectionDetails />
      <EmblaCarousel />
    </section>
  );
};
