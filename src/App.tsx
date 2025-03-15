//App.tsx

import "./App.css";
import VegetablesList from "./components/VegetablesList"
import AnimalsList from "./components/AnimalsList"
import FruitsList from "./components/FruitsList"

function App() {
  return (
    <div>
      <h1>HelloWorld!</h1>
      <VegetablesList />
      <AnimalsList />
      <FruitsList />
    </div>
  );
}

export default App;