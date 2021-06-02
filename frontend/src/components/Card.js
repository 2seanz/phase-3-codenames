import React, { Component } from 'react'


class Card extends Component {

    handleClick = (e) => {
        const teamCode = this.props.keyCards[e.target.id]
        const num = this.props.state.turn == "Red" ? 2 : 1

        if (this.props.state.guesses != 0){
            this.touchCard(e)
            // Switch turns after we've used up all guesses 
            //or when the assassin/wrong card has been clicked
            this.props.addCardToTeam(e)
            if (this.props.state.guesses == this.props.state.turnCards.length){
                this.props.setTurn()
            }

            if (teamCode === 3 ){
                const winner = this.props.state.turn === "Red" ? "Blue" : "Red"
                alert(`${winner} Team Wins!`)
            }
            if (teamCode != num){
                this.props.setTurn()
            }
            // tally the team score 
            this.props.addScore(e.target.id, teamCode)
            // if redteamcards == 9 or if blueteamcards == 8 then END GAME
            if (this.props.state.redTeamCards.length == 9) {
                alert("Red Team Wins!")
            }
            if (this.props.state.blueTeamCards == 8){
                alert("Blue Team Wins!")
            }
        }
    }

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
            <div id={this.props.pizza} className="d-flex justify-content-center card col border border-2 border-dark" onClick={(e)=>this.handleClick(e)}>
                <div id={this.props.pizza} className="">{this.props.word}</div>
            </div>
        )
    }
}

export default Card
