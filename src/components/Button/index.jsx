export const Button = ({ btnType, children }) => {
  return (
    <button
      className={`text-white text-sm transition-all duration-300 hover:bg-white hover:outline hover:outline-1 hover:outline-offset-0 ${
        btnType === 'secondary'
          ? 'bg-blue py-3 px-8 rounded-xl hover:text-blue hover:outline-offset-blue'
          : 'py-[12px] px-6 rounded-lg bg-orange hover:text-orange hover:outline-offset-orange'
      }`}
    >
      {children}
    </button>
  );
};
