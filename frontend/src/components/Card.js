import React, { Component } from 'react'

class Card extends Component {

    touchCard = (e) => {
        const type = e.target.children.length
        console.log(e.target)
        console.log(e.target.children.length)

        // which color am i?!
        console.log(this.props.keyCards[e.target.id])

        // set color
        let bgColor
        switch(this.props.keyCards[e.target.id]) {
            case 0: 
                bgColor = "#ffc107"; // warning
                break;
            case 1:
                bgColor = "#007bff"; // primary
                break;
            case 2:
                bgColor = "#dc3545"; // danger
                break;
            case 3: 
                bgColor = "#343a40"; // dark
                break;
        }
        console.log(e.target.style.backgroundColor)

        type === 1? e.target.style.backgroundColor = bgColor : e.target.parentElement.style.backgroundColor = bgColor
    }

    render() {
        return (
            <div id={this.props.pizza} className="d-flex justify-content-center card col border border-2 border-dark" onClick={(e)=>this.touchCard(e)}>
                <div className="">{this.props.word}</div>
            </div>
        )
    }
}

export default Card
