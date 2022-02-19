import './App.css'
import { AvatarShadowType, Header } from './components/Header';
import { Links } from "./components/Links";
import Config from "./data/config.json";
import AvatarImage from "./assets/png/avatar.png";

function App() {
  return (
    <div className="App">
      <Header
        avatarOptions={{
          title: Config.avatarOptions.title,
          description: Config.avatarOptions.description,
          avatarImageSource: AvatarImage
        }}
        stylingOptions={Config.stylingOptions}
      />

      <Links
        links={Config.links}
      />
    </div>
  );
}

export default App
