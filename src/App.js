import "./index.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Step />
    </div>
  );
}

function Step() {
  const [stitches, setStitches] = useState(0);
  const [row, setRow] = useState(0);
  const [repeat, setRepeat] = useState(0);

  return (
    <div>
      <div className="stitches">
      <button onClick={() => setStitches((c) => c - 1)}>-</button>
      <p>Stitches: {stitches}</p>
      <button onClick={() => setStitches((c) => c + 1)}>+</button>
      </div>
      <div className="row">
      <button onClick={() => setRow((c) => c - 1)}>-</button>
      <p>Row: {row}</p>
      <button onClick={() => setRow((c) => c + 1)}>+</button>
      </div>
      <div className="repeat">
      <button onClick={() => setRepeat((c) => c - 1)}>-</button>
      <p>Repeat: {repeat}</p>
      <button onClick={() => setRepeat((c) => c + 1)}>+</button>
      </div>
    </div>
  );
}