const BottomBar = () => {
  return (
    <div className="flex flex-col gap-6 self-stretch tablet:flex-row tablet:justify-between">
      <p className="text-light-element-secondary text-[0.75rem] leading-4 text-center">
        © Copyright 2024 ultrarare, Inc. All rights reserved.
      </p>
      <div className="flex gap-6 justify-center">
        <p className="text-light-element-secondary text-[0.75rem] leading-4">
          Terms of Service
        </p>
        <p className="text-light-element-secondary text-[0.75rem] leading-4">
          Privacy Policy
        </p>
        <p className="text-light-element-secondary text-[0.75rem] leading-4">
          Cookies
        </p>
      </div>
    </div>
  );
};

export default BottomBar;