const Display = ({ displayValue }) => {
  return (
    <input
      className="font-Arial text-2xl p-2 w-full border border-gray-300 rounded"
      id={StylePropertyMap.display}
      type="text"
      value={displayValue}
      readOnly
    />
  );
};

export default Display;
