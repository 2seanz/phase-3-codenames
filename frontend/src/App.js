import './App.css';
import Home from './components/Home'
import Board from './components/Board'
import Credits from './components/Credits'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom'
import React, { useState } from 'react';


function App() {
  const [winner, setState] = useState(0)

  const changeState = (winner) => {
    setState(winner)
  }

  return (
      <div className="App d-flex flex-column align-items-center justify-content-center" style={{height: '200vh'}}>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/game-board'>
            <Board state={winner} changeState={changeState}/>
          </Route>
          <Route path='/end-screen'>
              <Credits state={winner} changeState={changeState}/>
          </Route>
        </Switch>
      </div>
  );
}

export default App;
