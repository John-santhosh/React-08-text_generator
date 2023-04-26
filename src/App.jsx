import { useEffect, useState } from "react";
// library for unique id like uuid
import { nanoid } from "nanoid";
import data from "./data";
const App = () => {
  const [text, setText] = useState([]);
  const [count, setCount] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    const result = data.slice(0, count);
    setText(result);
  }

  return (
    <main>
      <div className="container">
        <h2>TIRED OF BORING LOREM IPSUM?</h2>

        <form onSubmit={handleSubmit}>
          <label htmlFor="number">Paragraphs : </label>
          <input
            id="number"
            type="number"
            value={count}
            placeholder="0 - 8 "
            min={1}
            step="1"
            max={data.length}
            onChange={(e) => {
              setCount(e.target.value);
            }}
          />
          <button>Generate</button>
        </form>
        {text.map((para) => (
          <p key={nanoid()}>{para}</p>
        ))}
      </div>
    </main>
  );
};
export default App;
