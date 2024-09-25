import { BlackButton_md } from "../global/button/BlackButton_md";

export const Info = () => {
  return (
    <div className="flex flex-col pt-6 px-3 pb-4 self-stretch">
      <div className="flex justify-between items-center self-stretch">
        <div className="flex flex-col gap-2 items-start flex-grow shrink-0 basis-0">
          <div className="flex items-center gap-2">
            <p className="text-light-element-primary text-sm font-medium tracking-default">
              Winter Madagascar
            </p>
            <img src="./assets/icons/verify.svg" alt="Verify Icon" />
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <p className="text-light-element-primary text-[0.75rem] leading-4 font-medium tracking-default">
                2k
              </p>
              <p className="text-light-element-secondary text-[0.75rem] leading-4">
                Followers
              </p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-light-element-primary text-[0.75rem] leading-4 font-medium tracking-default">
                56
              </p>
              <p className="text-light-element-secondary text-[0.75rem] leading-4">
                Followers
              </p>
            </div>
          </div>
        </div>

        <BlackButton_md icon="./assets/icons/plus.svg" />
      </div>
    </div>
  );
};
