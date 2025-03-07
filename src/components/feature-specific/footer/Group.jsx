const Group = ({ title, text1, text2, text3 }) => {
  return (
    <div className="flex flex-gro flex-col gap-3 w-[10.6875rem] tablet:w-[11.75rem]">
      <h3 className="text-light-element-primary text-[1rem] font-semibold leading-6 tracking-[0.0125rem]">
        {title}
      </h3>
      <p className="text-light-element-secondary text-sm tracking-[-0.0125rem]">
        {text1}
      </p>
      <p className="text-light-element-secondary text-sm tracking-[-0.0125rem]">
        {text2}
      </p>
      <p className="text-light-element-secondary text-sm tracking-[-0.0125rem]">
        {text3}
      </p>
    </div>
  );
};

export default Group;