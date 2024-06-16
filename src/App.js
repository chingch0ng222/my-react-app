import "./App.css";
import MyRGBPanel from "./components/rgb-panel/MyRGBPanel";
import MySlider from "./components/rgb-panel/MySlider";
import MyCalculator from "./components/calculator/MyCalculator";
import TicTacToe from "./components/tic-tac-toe/TicTacToe";

function App() {
  return (
    <div className="App">
      <h1>Hello React!!   4B0G0104康尹菘</h1>
      <h1>RGBPanel</h1>
      <MyRGBPanel />
      <h1>Calculator</h1>
      <MyCalculator />
      <h1>Tic-Tac-Toe Game</h1>
      <TicTacToe />
    </div>
  );
}

export default App;
