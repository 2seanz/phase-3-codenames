import './App.css';
import Home from './components/Home'
import Board from './components/Board'
import Credits from './components/Credits'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route} from 'react-router-dom'


function App() {
  return (
      <div className="App d-flex flex-column align-items-center justify-content-center" style={{height: '200vh'}}>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/game-board' component={Board}/>
          <Route path='/end-screen' component={Credits}/>
        </Switch>
      </div>
  );
}

export default App;
