import './App.css'
import { Header } from './components/Header';
import { Links } from "./components/Links";
import SampleAvatar from "./assets/png/sample-avatar.png";

function App() {
  return (
    <div className="App">
      <Header
        avatarOptions={{
          title: "Haneen Mahdin",
          description: "An aspiring full-stack developer and a UI/UX Designer",
          avatarImageSource: SampleAvatar,
        }}
      />

      <Links
        links={[
          {
            linkUrl: "https://haneenmahd.github.io",
            placeholder: "Website",
          },
          {
            linkUrl: "https://github.com/haneenmahd",
            placeholder: "GitHub",
          },
          {
            linkUrl: "https://dribbble.com/haneenmahdin",
            placeholder: "Dribble",
          },
        ]}
      />
    </div>
  );
}

export default App
