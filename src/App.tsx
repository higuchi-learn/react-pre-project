//App.tsx

import "./App.css";
import VegetablesList from "./components/VegetablesList"
import AnimalsList from "./components/AnimalsList"

function App() {
  return (
    <div>
      <h1>HelloWorld!</h1>
      <VegetablesList />
      <AnimalsList />
    </div>
  );
}

export default App;