import { GameBoard } from "./components/GameBoard";
import { Layout } from "./components/Layout";
import { GameProvider } from "./context/GameContext";
import "./index.css";

function App() {
  return (
    <GameProvider>
      <Layout>
        <GameBoard />
      </Layout>
    </GameProvider>
  );
}

export default App;
