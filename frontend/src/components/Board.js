import React, { Component } from 'react'
import Card from './Card'
import KeyCard from './KeyCard'

const allWords = ['ADAM','AFRICA','AGENT','AIR','ALEX','ALIEN','ALPS','AMAZON','AMBULANCE','AMERICA','AMY','ANGEL','ANTARCTICA','APPLE','ARM','ATLANTIS','AUSTRALIA','AZTEC','BACK','BALL','BAND','BANK','BAR','BARK','BAT']


class Board extends Component {


    randomWords = () => Array(25).fill().map((el,index)=>index).sort( () => .5 - Math.random() )

    componentDidMount() {
        console.log(allWords)
        console.log(this.randomWords())
    }

    render() {

        const randomWords = this.randomWords()
        return (
            <div className = "d-flex flex-column" style={{width: "70vw", marginTop: '2%'}}>
                <div className="d-flex flex-column" style={{marginBottom: '5%'}}>
                    {Array(5).fill().map((el,index) => <div className="row">{Array(5).fill().map((el2,index2) => <Card word={allWords[randomWords[index*5 + index2]]}/>)}</div>)}
                </div>
                <div style={{width: "40vw", margin: 'auto'}}>
                    <KeyCard />
                </div>
            </div>
        )
    }
}

export default Board
