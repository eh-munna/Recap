export default function Handlers() {
  function handleClick() {
    alert(`Button is clicked via handler function`);
  }

  const paramsClick = (num) => {
    alert(`${num} + 5 is: ${num + 5}`);
  };

  return (
    <>
      <h1 className="text-center">Different event handlers</h1>

      <div className="flex gap-3">
        <button
          className="p-1 rounded-md border border-indigo-300"
          onClick={handleClick}
        >
          Handler Click
        </button>
        <button
          className="p-1 rounded-md border border-indigo-300"
          onClick={() => paramsClick(4)}
        >
          With Parameter
        </button>
        <button
          className="p-1 rounded-md border border-indigo-300"
          onClick={() => alert(`Handler attached directly`)}
        >
          Direct Click
        </button>
      </div>
    </>
  );
}
