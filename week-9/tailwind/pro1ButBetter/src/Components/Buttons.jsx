export const Button = ({ disabled, children, onClick }) => {
  return (
    <div>
      <button
        onClick={disabled ? undefined : onClick} // Prevent click if disabled
        className={`text-red-50 w-64 px-4 py-2 rounded-lg transition-colors 
          ${disabled ? "bg-[#738aa0] hover:bg-sky-500 cursor-not-allowed" : "bg-sky-700 hover:bg-sky-500"}`}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
};
