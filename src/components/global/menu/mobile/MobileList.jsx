import { ListLink } from "./ListLink";

export const MobileList = () => {
  return (
    <ul className="flex flex-col self-stretch">
      <ListLink
        path="/explore"
        textValue="Explore"
        icon="/assets/icons/tag.svg"
      />
      <ListLink
        path="/create"
        textValue="Create"
        icon="/assets/icons/pencil.svg"
      />
      <ListLink
        path="/sell"
        textValue="Sell"
        icon="/assets/icons/dollar-sign.svg"
      />
    </ul>
  );
};
