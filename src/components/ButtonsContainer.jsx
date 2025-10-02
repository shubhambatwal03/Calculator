const ButtonsContainer = ({ onButtonClick }) => {
  const ButtonNames = [
    "C",
    "/",
    "*",
    "-",
    "7",
    "8",
    "9",
    "+",
    "4",
    "5",
    "6",
    "=",
    "1",
    "2",
    "3",
    ".",
    "0"
  ];

  // Helper to determine button color
  const getButtonClass = (name) => {
    if (["+", "-", "*", "/", "="].includes(name)) {
      return "bg-orange-500 text-white hover:bg-orange-600";
    }
    if (name === "C") {
      return "bg-gray-400 text-gray-900 hover:bg-gray-300";
    }
    return "bg-gray-700 text-white hover:bg-gray-600";
  };

  return (
    <div className="grid grid-cols-4 gap-4 p-2 w-full">
      {ButtonNames.map((ButtonName, idx) => (
        <button
          key={idx}
          onClick={() => onButtonClick(ButtonName)}
          className={`
            h-14 w-14 md:h-16 md:w-16 rounded-2xl shadow-lg
            flex items-center justify-center text-2xl font-semibold
            transition-all duration-150 active:scale-95
            bg-opacity-80 backdrop-blur
            ${getButtonClass(ButtonName)}
          `}
          style={{
            boxShadow: "0 4px 16px 0 rgba(0,0,0,0.15)",
            border: "none",
          }}
        >
          {ButtonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
