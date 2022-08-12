export const Button = ({ btnType, children }) => {
  return (
    <button
      className={`text-white text-sm transition-all duration-300 focus:bg-white hover:bg-white focus:outline hover:outline focus:outline-1 hover:outline-1 focus:outline-offset-0 hover:outline-offset-0 ${
        btnType === 'secondary'
          ? 'bg-blue py-3 px-8 rounded-xl focus:text-blue hover:text-blue focus:outline-offset-blue hover:outline-offset-blue'
          : 'py-[12px] px-6 rounded-lg bg-orange focus:text-orange hover:text-orange focus:outline-offset-orange hover:outline-offset-orange'
      }`}
    >
      {children}
    </button>
  );
};
