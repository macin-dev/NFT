export const Content = ({ token }) => {
  return (
    <div className="w-mobile flex flex-col gap-12 items-center mx-auto tablet:w-tablet tablet:px-10 tablet:pb-[3.75rem] tablet:items-start desktop:w-desktop desktop:px-[11.8125rem]">
      <div className="flex flex-col items-start gap-4 px-4 tablet:px-0 tablet:w-[26.5rem]">
        <h5 className="text-light-element-primary text-[1rem] leading-6 font-semibold tracking-default">
          Description
        </h5>
        <p className="text-light-element-secondary text-[1rem] leading-6 tracking-default">
          Phasellus pharetra porta sodales. Quisque a felis neque. Vivamus sed
          vulputate ex. Donec ullamcorper pharetra efficitur. Donec faucibus
          sapien non tellus dignissim placerat vel a ex. Ut cursus lorem vel leo
          mollis, commodo faucibus tellus volutpat. <br /> <br /> Quisque eros
          mi, aliquet fringilla nibh eget, interdum ullamcorper velit. Etiam
          cursus faucibus tortor, vel lacinia mauris volutpat et. Sed nec sem
          magna. Sed et sagittis lectus. Nam viverra, lectus maximus euismod
          mollis, nibh sem imperdiet orci, ultrices sagittis sem purus nec
          dolor.
        </p>
      </div>

      <div className="flex flex-col items-start gap-4 px-4 self-stretch tablet:px-0 tablet:w-[26.5rem]">
        <h5 className="text-light-element-primary text-[1rem] leading-6 font-semibold tracking-default">
          Details
        </h5>

        <div className="flex flex-col gap-4 self-stretch">
          <div className="flex justify-between self-stretch">
            <p className="text-light-element-secondary text-sm tracking-default">
              Medium
            </p>
            <p className="text-light-element-primary text-sm tracking-default">
              Dynamic
            </p>
          </div>

          <div className="flex justify-between self-stretch">
            <p className="text-light-element-secondary text-sm tracking-default">
              File Size
            </p>
            <p className="text-light-element-primary text-sm tracking-default">
              100 KB
            </p>
          </div>

          <div className="flex justify-between self-stretch">
            <p className="text-light-element-secondary text-sm tracking-default">
              Token Standard
            </p>
            <p className="text-light-element-primary text-sm tracking-default">
              {token}
            </p>
          </div>

          <div className="flex justify-between self-stretch">
            <p className="text-light-element-secondary text-sm tracking-default">
              Blockchain
            </p>
            <p className="text-light-element-primary text-sm tracking-default">
              Ethereum
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
