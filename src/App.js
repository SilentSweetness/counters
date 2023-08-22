import "./index.css";
import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  const handleAddItems = (item) => {
    setItems((items) => [...items, item])
  };

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id))
  }

  function handleToggleItem(id) {
    setItems((items) => items.map((item) => item.id === id ? {...item, packed: !item.packed} : item))
  }

  return (
    <div className="App">
      <Step />
      <Form onAddItems={handleAddItems}/>
      <PackingList items={items} onDeleteItem={handleDeleteItem} 
      onToggleItems={handleToggleItem}/>
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

const Form = ({ onAddItems }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  

  
  //use ...items (spreader) because .push can't be used for state

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!description) return;

    const newItem ={description, quantity, packed: false, id:Date.now() };
    console.log(newItem);

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }
//onSubmit works for button click AND enter key press
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Notes</h3>
      <input 
        type="text" 
        placeholder="Item..." 
        value={description} 
        onChange={(e) => setDescription(e.target.value )}
      />
      <button className="listButton">Add</button>
    </form>
  )
}

const PackingList = ({ items, onDeleteItem, onToggleItems }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
        <Item item={item} onDeleteItem={onDeleteItem} key={item.id} onToggleItems={onToggleItems} />
        ))}
      </ul>
    </div>
  )
}
//^^item => <component name, prop name={object name} />

function Item({ item, onDeleteItem, onToggleItems }) {
  return (
    <li>
      <input type="checkbox" value={item.packed} onChange={() => onToggleItems(item.id)} />
      <span style={item.packed ? {textDecoration: "line-through"} : {}}>
      {item.description}
      </span>
      <button className="deleteButton" onClick={() => onDeleteItem(item.id)} style={{ color: 'red'}}>X</button>
    </li>
  );
}
