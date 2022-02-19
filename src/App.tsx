import './App.css'
import { Header } from './components/Header';
import SampleAvatar from "./assets/png/sample-avatar.png";

function App() {
  return (
    <div className="App">
      <Header avatarOptions={{
        title: "Haneen Mahdin",
        description: "An aspiring full-stack developer and a UI/UX Designer",
        avatarImageSource: SampleAvatar,
      }} />
    </div>
  );
}

export default App
