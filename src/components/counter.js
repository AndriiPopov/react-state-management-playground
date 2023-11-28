const Counter = ({ title, increment, decrement, count }) => (
  <>
    <h1>{title}</h1>
    <div>
      {decrement && <button onClick={decrement}>-</button>}
      <span
        style={{
          margin: "0 10px",
        }}
      >
        {count}
      </span>
      {increment && <button onClick={increment}>+</button>}
    </div>
  </>
);

export { Counter };
