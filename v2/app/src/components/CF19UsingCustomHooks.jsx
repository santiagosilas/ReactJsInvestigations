import useLowerCaseInput from "../hooks/useCustomHook";

const CF = () => {
  const attributes = useLowerCaseInput("Custom Hooks in React.js");
  return (
    <div className="bg-gray-100 py-4 px-4 my-4">
      {/* // equivale a <input value={attributes.value} onChange={attributes.onChange} /> */}
      <input {...attributes} />
    </div>
  );
};

export default CF;
