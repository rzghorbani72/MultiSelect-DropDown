import "./App.scss";
import Dropdown from "./components/dropdown/dropdown";
import DropdownContent from "./components/dropdown/dropdownContent";
import DropdownInput from "./components/input/input";

function App() {
  return (
    <div className="wrapper">
      <Dropdown>
        <DropdownInput />
        <DropdownContent />
      </Dropdown>
    </div>
  );
}

export default App;
