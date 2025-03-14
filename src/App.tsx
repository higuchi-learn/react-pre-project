//App.tsx

import "./App.css";
import VegetablesList from "./components/VegetablesList"
import FruitsList from "./components/FruitsList"

function App() {
  return (
    <div>
      <h1>HelloWorld!</h1>
      <VegetablesList />
      <FruitsList />
    </div>
  );
}

export default App;