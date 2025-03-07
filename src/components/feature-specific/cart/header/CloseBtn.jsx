export const CloseBtn = ({ onClickCart }) => {
  return (
    <button
      onClick={() => onClickCart()}
      className="bg-light-surface-soft w-12 h-12 p-3.5 rounded-xl"
    >
      <img src="/assets/icons/x.svg" alt="close icon" />
    </button>
  );
};
