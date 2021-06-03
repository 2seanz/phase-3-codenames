import React, { Component } from 'react'

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
            keyCardBlock = <div style={{color: 'white'}} className="bg-dark">assassin</div>
        return keyCardBlock
    }

    render() {
        return (
            <div className="d-flex flex-column justify-content-center key" style={{visibility: 'hidden'}}>
                {Array(5).fill().map((el,index) => <div className="row">{Array(5).fill().map((el2,index2) => <div style={{margin: '1%'}} className="col card key border border-dark justify-content-center">{this.convertNumToColor(this.props.keyCards[index * 5 + index2])}</div>)}</div>)}
            </div>
        )
    }
}
