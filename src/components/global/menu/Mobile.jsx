import { Link } from "react-router-dom";

export const Mobile = () => {
  return (
    <>
      <div className="flex items-center gap-6">
        <Link to="/">
          <img src="/assets/icons/shortLogo.svg" alt="Logo Ultrarare" />
        </Link>
        <img src="/assets/icons/search.svg" alt="Search icon" />
      </div>
      <div className="flex items-center gap-4">
        <img
          className="p-2"
          src="/assets/icons/shopping-bag.svg"
          alt="Shopping bag icon"
        />
        <img src="/assets/icons/menu.svg" alt="Menu icon" />
      </div>
    </>
  );
};
