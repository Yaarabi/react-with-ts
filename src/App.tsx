import "./App.css";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";

function App() {
    return (
        <div className="App">
            <Greeting name="Mohamed" />
            <Counter />
        </div>
    );
}

export default App;
