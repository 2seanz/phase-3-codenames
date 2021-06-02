import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

class Turn extends Component {



    switchTurns = () => {
        return this.props.state.turn
        
    }



    render() {
        return (
            <div>
                <h1>{this.switchTurns()} team's turn</h1>
                <h3>Pick number of guesses! 
                    <Button onClick={(e) => this.props.guessesLeft(e)} variant="success" style={{margin: "2%"}}>1</Button>
                    <Button onClick={(e) => this.props.guessesLeft(e)} variant="success" style={{margin: "2%"}}>2</Button>
                    <Button onClick={(e) => this.props.guessesLeft(e)} variant="success" style={{margin: "2%"}}>3</Button>
                </h3>
            </div>
        )
    }
}

export default Turn