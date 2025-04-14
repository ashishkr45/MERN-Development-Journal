export const Input = ({ type, placeHolder, onChange }) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeHolder}
        className="p-2 px-2 border border-[#38597c] text-blue-50 mb-4 bg-[#18395f] rounded-lg w-64"
        onChange={onChange} // Call onChange when input changes
      />
    </div>
  );
};
