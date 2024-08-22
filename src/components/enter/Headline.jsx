export const Headline = () => {
  return (
    <div className="flex flex-col items-start gap-3 self-stretch">
      <h2 className="text-light-element-primary text-2xl font-semibold leading-7 tracking-[-0.063rem] desktop:text-[2rem] desktop:leading-10">
        Enter your email and username
      </h2>
      <p className="flex text-light-element-secondary text-sm font-normal tracking-[-0.012rem] self-stretch tablet:text-base desktop:text-lg desktop:leading-6">
        Choose a display name and enter your email address.
      </p>
    </div>
  );
};
