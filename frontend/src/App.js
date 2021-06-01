import './App.css';
import Home from './components/Home'
import Board from './components/Board'
import Credits from './components/Credits'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App d-flex align-items-center justify-content-center" style={{height: '100vh'}}>
      <Home />
      <Board />
      <Credits />
    </div>
  );
}

export default App;