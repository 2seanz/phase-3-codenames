import React, { Component } from 'react'
import Card from './Card'
import KeyCard from './KeyCard'
import Button from 'react-bootstrap/Button'
import Turn from './Turn'

const allWords = ['ADAM','AFRICA','AGENT','AIR','ALEX','ALIEN','ALPS','AMAZON','AMBULANCE','AMERICA','AMY','ANGEL','ANTARCTICA','APPLE','ARM','ATLANTIS','AUSTRALIA','AZTEC','BACK','BALL','BAND','BANK','BAR','BARK','BAT']
const requiredCards = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,3].sort( () => .5 - Math.random() )
const randomWords = Array(25).fill().map((el,index)=>index).sort( () => .5 - Math.random() )

class Board extends Component {

    state = {
        turn: "Red",
        guesses: 0,
        redTeamCards: [],
        blueTeamCards: [],
        requiredCards: requiredCards,
        randomWords: randomWords,
        turnCards: []
    }

    addCardToTeam = (e) => {
        let turnCards = this.state.turnCards
        turnCards.push(allWords[randomWords[e.target.id]])
        // this.props.keyCards[e.target.id]
        // console.log(allWords[randomWords[e.target.id]])
        this.setState({turnCards})
    }

    setTurn = () => {
       const turn = this.state.turn
       const turnCards = []
       turn === "Red" ? this.setState({turn: "Blue"}) : this.setState({turn: "Red"})
       this.setState({guesses: 0})
       this.setState({turnCards})
    }

    guessesLeft = (e) => {
        this.setState({
            guesses: e.target.innerText
        })
    }

    addScore = (index, num) => {
        if (num == 1){
            let blueTeamCards = this.state.blueTeamCards
            blueTeamCards.push(index)
        }
        if (num == 2){
            let redTeamCards = this.state.redTeamCards
            redTeamCards.push(index)
        }
    }

    // randomWords = () => Array(25).fill().map((el,index)=>index).sort( () => .5 - Math.random() )

    handleSuccessClick = (event) => {
        // This method will change visibility of button to "visible" when clicked
        console.log(event.target)
        const currentVisibility = document.querySelector('.key').style.visibility
        let targetVisibility
        currentVisibility === 'hidden'? targetVisibility = 'visible' : targetVisibility = 'hidden'
        document.querySelector('.key').style.visibility = targetVisibility
    }

    render() {

        
        return (
            <div className = "d-flex flex-column" style={{width: "70vw", marginTop: '2%'}}>
                <div>
                    <Turn setTurn = {this.setTurn} guessesLeft={this.guessesLeft} state={this.state} keyCards={this.state.requiredCards}/>
                </div>
                <div className="d-flex flex-column" style={{marginBottom: '5%'}}>
                    {Array(5).fill().map((el,index) => <div className="row">{Array(5).fill().map((el2,index2) => <Card addScore={this.addScore} addCardToTeam={this.addCardToTeam} setTurn = {this.setTurn} state={this.state} pizza={index*5 + index2} keyCards={this.state.requiredCards} word={allWords[this.state.randomWords[index*5 + index2]]}/>)}</div>)}
                </div>
                <div style={{width: "40vw", margin: 'auto'}}> {/* backgroundColor: '#343a40'*/}
                    <KeyCard keyCards={this.state.requiredCards}/>
                </div>
                <div style={{marginTop: '3%'}}>
                    <Button variant="success" onClick={(e) => this.handleSuccessClick(e)}>Spymaster Button</Button>
                </div>
            </div>
        )
    }
}

export default Board
