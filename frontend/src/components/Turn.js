import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

class Turn extends Component {

    changeTurnsButton = () => {
        // console.log(this.props.state.guesses + " " + this.props.state.turnCards.length)
        this.props.setTurn()
    }

    render() {
        return (
            <div>
                <h1 className="">{this.props.state.turn} team's turn</h1>
                <h3>Pick number of guesses! 
                    <Button onClick={(e) => this.props.guessesLeft(e)} variant="success" style={{margin: "2%"}}>1</Button>
                    <Button onClick={(e) => this.props.guessesLeft(e)} variant="success" style={{margin: "2%"}}>2</Button>
                    <Button onClick={(e) => this.props.guessesLeft(e)} variant="success" style={{margin: "2%"}}>3</Button>
                </h3>
                <div>
                    <Button onClick={(e) => this.changeTurnsButton()} variant="dark" style={{margin: "2%"}}>Pass your turn</Button>
                </div>
            </div>
        )
    }
}

export default Turn