export const Button = ({ btnType, children }) => {
  return (
    <button
      className={`text-white text-sm ${
        btnType === 'secondary'
          ? 'bg-blue py-3 px-8 rounded-xl'
          : 'py-[12px] px-6 rounded-lg bg-orange'
      }`}
    >
      {children}
    </button>
  );
};
