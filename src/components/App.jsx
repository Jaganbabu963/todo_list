import React, { useState } from "react";
import ToDoitem from "./Additem";
import Upper from "./Upper";

function App() {
  let [arrTask, setArrTask] = useState([]);

  function handleClick(task) {
    setArrTask((x) => [...x, task]);
  }

  function deleteItem(id) {
    setArrTask((prev) => {
      return prev.filter((e, index) => index !== id);
    });
  }

  return (
    <div className="container">
      <Upper onAdd={handleClick} />
      <div>
        <ul>
          {arrTask.map((e, index) => (
            <ToDoitem id={index} delF={deleteItem} text={e} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
