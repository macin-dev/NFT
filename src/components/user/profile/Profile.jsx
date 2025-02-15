import { Image } from "./Image";
import Button from "../../common/button/Button.jsx";

export const Profile = ({ username, urlAvatar, bgURL }) => {
  return (
    <section className="flex flex-col w-mobile tablet:w-tablet desktop:w-desktop">
      <Image urlAvatar={urlAvatar} bgURL={bgURL} />

      <div className="pt-14 px-4 pb-6 flex flex-col tablet:pt-20 tablet:px-10 desktop:px-20 desktop:pt-20">
        <div className="flex flex-col gap-6 self-stretch tablet:items-start">
          <div className="flex justify-between items-start self-stretch tablet:order-first">
            <div className="flex gap-2 items-center">
              <h2 className="text-light-element-primary text-[1.5rem] font-semibold leading-7 tracking-[-0.0625rem] tablet:text-[2rem] tablet:leading-10">
                {username}
              </h2>
              <img
                className="w-6 h-6"
                src="/assets/icons/verify.svg"
                alt="Verify Icon"
              />
            </div>

            <div className="bg-light-surface-secondary-btn flex items-center justify-center p-2 rounded-[0.625rem]">
              <img
                className="w-4 h-4"
                src="/assets/icons/more-vertical.svg"
                alt="Icon"
              />
            </div>
          </div>

          <Button size="large" color="black" value="Follow" />


          <p className="text-light-element-secondary text-[0.75rem] leading-4 tablet:order-first tablet:text-sm tablet:w-[39rem]">
            Milady Maker is a collection of 10,000 generative NFT's in a
            neochibi aesthetic inspired by street style tribes.
          </p>

          <div className="flex gap-6 self-stretch tablet:mt-10">
            <div className="flex gap-[0.3125rem]">
              <p className="text-light-element-primary text-sm font-medium tracking-default">
                235k
              </p>
              <p className="text-light-element-secondary text-sm tracking-default">
                Followers
              </p>
            </div>

            <div className="flex gap-[0.3125rem]">
              <p className="text-light-element-primary text-sm font-medium tracking-default">
                1000
              </p>
              <p className="text-light-element-secondary text-sm tracking-default">
                Following
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
