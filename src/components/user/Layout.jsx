import { Content } from "./profile/Content";
import { Profile } from "./profile/Profile";

export const Layout = () => {
  return (
    <section className="flex flex-col self-stretch mx-auto w-mobile tablet:w-tablet desktop:w-desktop">
      <Profile />
      <Content />
    </section>
  );
};
