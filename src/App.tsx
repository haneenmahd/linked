import './App.css'
import { Header } from './components/Header';
import { Links } from "./components/Links";
import Config from "./data/config.json";

function App() {
  return (
    <div className="App">
      <Header
        avatarOptions={Config.avatarOptions}

        stylingOptions={Config.stylingOptions}
      />

      <Links
        links={Config.links}
      />
    </div>
  );
}

export default App
