import React, { Component } from 'react'

const requiredCards = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,3].sort( () => .5 - Math.random() )

export default class KeyCard extends Component {

    convertNumToColor = (num) => {
        let keyCardBlock 
        if (num == 0) 
            keyCardBlock = <div className="bg-warning">neutral</div>

        if (num == 1)
            keyCardBlock = <div className="bg-primary">blue</div>

        if (num == 2)
            keyCardBlock = <div className="bg-danger">red</div>

        if (num == 3)
            keyCardBlock = <div className="bg-dark">assassin</div>
        return keyCardBlock
    }

    render() {
        return (
            <div className="d-flex flex-column justify-content-center">
                {Array(5).fill().map((el,index) => <div className="row">{Array(5).fill().map((el2,index2) => <div className="col border border-dark">{this.convertNumToColor(requiredCards[index * 5 + index2])}</div>)}
                </div>)}
            </div>
        )
    }
}
