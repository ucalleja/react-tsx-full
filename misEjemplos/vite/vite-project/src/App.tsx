import "./App.css";
import Autocomplete from "./Components/Autocomplete/Autocomplete";
import { Sugus } from "./Components/Sugus/Sugus";
import { Accordion } from "./Components/Accordion/Accordion";

function App() {
  return (
    <div className="p-4 space-y-2">
      <Sugus name="Sugus Red" color="red-500" />

      <Autocomplete />

      <Accordion title="Accordion Title">
        <p>This is the content of the accordion.</p>
      </Accordion>
    </div>
  );
}

export default App;
