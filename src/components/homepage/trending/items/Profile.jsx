export const Profile = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex w-12 h-12 justify-center items-center">
        <img
          className="rounded-2xl w-full h-full"
          src="./assets/trending/profile1.jpeg"
          alt="Avatar"
        />
      </div>
      <div className="flex flex-col items-start gap-1">
        <div className="flex items-center gap-2">
          <h3 className="text-light-element-primary text-[1rem] font-semibold leading-6 tracking-[-0.012rem]">
            Extraordinary Ape
          </h3>
          <img src="./assets/icons/verify.svg" alt="Verify Icon" />
        </div>
        <div className="flex gap-1 text-light-element-secondary text-sm tracking-[-0.012rem]">
          <p>40</p>
          <p>ETH</p>
        </div>
      </div>
    </div>
  );
};
