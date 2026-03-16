import "./App.css";
import Autocomplete from "./Components/Autocomplete/Autocomplete";
import { Sugus } from "./Components/Sugus/Sugus";

function App() {
  return (
    <div className="p-4 space-y-2">
      <Sugus name="Sugus Red" color="red-500" />

      <Autocomplete />

    </div>
  );
}

export default App;
