import { GameBoard } from "./components/GameBoard";
import { Layout } from "./components/Layout";
import { WinnerBanner } from "./components/WinnerBanner";
import { GameProvider } from "./context/GameContext";
import "./index.css";

function App() {
  return (
    <GameProvider>
      <Layout>
        <WinnerBanner />
        <GameBoard />
      </Layout>
    </GameProvider>
  );
}

export default App;
