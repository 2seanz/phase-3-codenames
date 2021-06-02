import React, { Component } from 'react'

class Card extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center card col border border-2 border-dark">
                <div className="">{this.props.word}</div>
            </div>
        )
    }
}

export default Card
