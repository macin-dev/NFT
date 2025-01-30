import { ListLink } from "./ListLink";

const UnorderedList = () => {
  return (
    <ul className="flex flex-col self-stretch">
      <ListLink path="/explore" text="Explore" />
      <ListLink path="/create" text="Create NFTs" />
      <ListLink path="/sell" text="Sell NFTs" />
      <ListLink path="/account" text="Account" />
    </ul>
  );
};

export default UnorderedList;
