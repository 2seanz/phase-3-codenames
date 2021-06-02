import React, { Component } from 'react'

class Turn extends Component {

    whosTurn = () => {
        return "Red"
    }

    render() {
        return (
            <div>
                <h1>{this.whosTurn()} team's turn</h1>
                
            </div>
        )
    }
}

export default Turn