import React, { Component } from 'react'

class Card extends Component {
    render() {
        return (
            <div className="card col border border-2 border-dark">
                <div>{this.props.word}</div>
            </div>
        )
    }
}

export default Card
