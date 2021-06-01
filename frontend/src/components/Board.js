import React, { Component } from 'react'
import Card from './Card'

class Board extends Component {
    render() {
        return (
            <div class="d-flex flex-column">
                {Array(5).fill().map(el => <div class="row">{Array(5).fill().map(el => <Card />)}</div>)}
            </div>
        )
    }
}

export default Board
