import Group from "./Group.jsx";

const Explore = () => {
  return (
    <div className="flex flex-col tablet:flex-grow items-start gap-10 self-stretch tablet:flex-row tablet:gap-2.5">
      <div className="tablet:flex-grow tablet:shrink-0 tablet:w-6 tablet:h-[1.625rem]">
        <img src="/assets/icons/shortLogo.svg" alt="Logo of Platform" />
      </div>

      <div className="flex flex-row flex-wrap gap-y-10 self-stretch tablet:w-[35.3125rem] tablet:gap-0 tablet:justify-start">
        <Group title="Marketplace" text1="Explore" text2="Jobs" text3="Help" />

        <Group title="Links" text1="API" text2="Token" text3="Branding" />

        <Group
          title="Socials"
          text1="Facebook"
          text2="Discord"
          text3="Instagram"
        />
      </div>
    </div>
  );
};

export default Explore;
