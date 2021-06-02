import React, { Component } from 'react'
import Card from './Card'
import KeyCard from './KeyCard'
import Button from 'react-bootstrap/Button'
import Turn from './Turn'

const allWords = ['ADAM','AFRICA','AGENT','AIR','ALEX','ALIEN','ALPS','AMAZON','AMBULANCE','AMERICA','AMY','ANGEL','ANTARCTICA','APPLE','ARM','ATLANTIS','AUSTRALIA','AZTEC','BACK','BALL','BAND','BANK','BAR','BARK','BAT']
const requiredCards = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,3].sort( () => .5 - Math.random() )

class Board extends Component {


    randomWords = () => Array(25).fill().map((el,index)=>index).sort( () => .5 - Math.random() )

    handleSuccessClick = (event) => {
        // This method will change visibility of button to "visible" when clicked
        console.log(event.target)
        const currentVisibility = document.querySelector('.key').style.visibility
        let targetVisibility
        currentVisibility === 'hidden'? targetVisibility = 'visible' : targetVisibility = 'hidden'
        document.querySelector('.key').style.visibility = targetVisibility
    }

    render() {

        const randomWords = this.randomWords()
        return (
            <div className = "d-flex flex-column" style={{width: "70vw", marginTop: '2%'}}>
                <div>
                    <Turn keyCards={requiredCards}/>
                </div>
                <div className="d-flex flex-column" style={{marginBottom: '5%'}}>
                    {Array(5).fill().map((el,index) => <div className="row">{Array(5).fill().map((el2,index2) => <Card pizza={index*5 + index2} keyCards={requiredCards} word={allWords[randomWords[index*5 + index2]]}/>)}</div>)}
                </div>
                <div style={{width: "40vw", margin: 'auto'}}>
                    <KeyCard keyCards={requiredCards}/>
                </div>
                <div style={{marginTop: '3%'}}>
                    <Button variant="success" onClick={(e) => this.handleSuccessClick(e)}>Spymaster Button</Button>
                </div>
            </div>
        )
    }
}

export default Board
