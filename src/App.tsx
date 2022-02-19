import './App.css'
import { Header } from './components/Header';
import { Links } from "./components/Links";
import { LinkTheme } from './components/Links';
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
            placeholder: "Portfolio ✨",
          },
          {
            linkUrl: "https://github.com/haneenmahd",
            placeholder: "GitHub",
            colorSet: LinkTheme.GITHUB_THEME,
          },
          {
            linkUrl: "https://dribbble.com/haneenmahdin",
            placeholder: "Dribble",
            colorSet: LinkTheme.DRIBBLE_THEME,
          },
          {
            linkUrl: "https://instagram.com/haneenmahdin",
            placeholder: "Instagram",
            colorSet: LinkTheme.INSTAGRAM_THEME,
          },
          {
            linkUrl: "https://instagram.com/haneenmahdin",
            placeholder: "Lol",
            colorSet: LinkTheme.PORTFOLIO_THEME,
          },
        ]}
      />
    </div>
  );
}

export default App
