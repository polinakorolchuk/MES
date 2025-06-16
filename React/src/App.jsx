import { Task1 } from "./ReactModule/Task1.jsx";
import { Task2 } from "./ReactModule/Task2.jsx";
import { Task3 } from "./ReactModule/Task3.jsx";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: 40 }}>
      <div>
        <h1>Task 1</h1>
        <Task1 />
      </div>
      <div>
        <h1>Task 2</h1>
        <Task2 />
      </div>
      <div>
        <h1>Task 3</h1>
        <Task3 />
      </div>
    </div>
  );
}

export default App;
