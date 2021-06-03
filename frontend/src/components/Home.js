import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Navbar from 'react-bootstrap/Navbar'

class Home extends Component {

    state = {
        playerNum: 2,
        players: [],
        blueTeam: [],
        redTeam: [],
        redSpyMaster: [0, 0],
        blueSpyMaster: [0, 0]
    }

    handleClick = (event,num) => {
        console.log(event.target)
        console.log(num)
        this.setState({playerNum: num})
        this.setState({players: Array(num).fill()})
    }

    handleFormChange = (event, index) => {
        let myArray = this.state.players
        myArray[index] = event.target.value     // we're sticking in whatever user types in the form and store it in state

        this.setState({players: myArray})
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const num = this.state.playerNum

        // Sort names
        console.log(this.state.players)
        let redTeam = []
        let blueTeam = []

        this.state.players.map((el,index) => {
            if(index%2 === 0)
                redTeam.push(el)
            if(index%2 === 1)
                blueTeam.push(el)
        })

        this.setState({redTeam})
        this.setState({blueTeam})
    }


    variantName = (team, index) => {
        if (team === "red" )
           return this.state.redSpyMaster[index] == 0 ? "outline-" : ""

        if (team === "blue" )
           return this.state.blueSpyMaster[index] == 0 ? "outline-" : ""
    }


    selectSpyMaster = (e, index, team) => {
        console.log(e.target.innerText)
        console.log (index)
        console.log (team)
        
        if(team == "red") {
            this.setState({redSpyMaster: Array(this.state.redTeam.length).fill(0)})
            this.setState(state => {
                state.redSpyMaster[index] = 1
                return state
            })
        }
        if(team == "blue") {
            this.setState({blueSpyMaster: Array(this.state.blueTeam.length).fill(0)})
            this.setState(state => {
                state.blueSpyMaster[index] = 1
                return state
            })
        }
        
        //if name is clicked make it the spymaster
        // if (this.state.redSpyMaster === 
    }

    displayBlueTeam = () => {
        const team = "blue"
        const blue = this.state.blueTeam.map((ele, index) => <div>
                                                                <Button variant={`${this.variantName(team, index)}primary`} onClick = {(e) => this.selectSpyMaster(e, index, team)}>{ele}</Button>{' '}
                                                            </div>)
        return blue
    }

    displayRedTeam = () => {
        const team = "red"
        const red = this.state.redTeam.map((ele, index) => <div>
        <Button variant={`${this.variantName(team, index)}danger`} onClick = {(e) => this.selectSpyMaster(e, index, team)}>{ele}</Button>{' '}
        </div>)
        return red
    }

    displayForm = () => {
        // console.log("we made it bishhh")

         const ourForm = Array(this.state.playerNum).fill().map((item, index) => (
             <div>
                <Form.Group controlId="playerNames">                
                    <Form.Control 
                        type="name" 
                        placeholder={`Enter Name of Player ${index + 1}`} 
                        onChange={(event) => this.handleFormChange(event,index)}/>
                </Form.Group>
             </div>
        ))
        return ourForm
    }

    handleStart = () => {
        console.log('we made it')
        // in the future make it so that this button opens the game component
    }

    render() {
        const variant = "Info"
        return (
            <div>
                <div style={{width: '60vw'}}>
                    <Navbar bg='secondary' expand="lg" className="rounded">
                        <Navbar.Brand style={{fontWeight: 'bold'}} href="#home">CODENAMES</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    </Navbar>
                    <div style={{marginTop: '1%', marginBottom: '1%'}}>
                        <DropdownButton key={variant} id={`dropdown-variants-${variant}`} variant={variant.toLowerCase()} title={"Number of players"}>                            
                            {[4,5,6,7,8,9,10].map(item => <Dropdown.Item key={item} eventKey={item.toString()} onClick={(event)=>this.handleClick(event,item)}>{item} Players</Dropdown.Item>)}
                        </DropdownButton>
                    </div>
                    <div style={{width: '60%', justifyContent: 'center', display: 'flex', margin: 'auto'}}>
                        <Form onSubmit={(event)=>this.handleSubmit(event)}>
                            {this.displayForm()}
                            <Button variant="primary" type="submit">Submit</Button>
                        </Form>
                    </div>
                </div>
                <div style={{marginTop: '1%', marginBottom: '1%'}}>{/*Team Sorting*/}
                    <div style={{marginBottom: '2%'}} className="d-flex flex-row justify-content-center"> {this.displayBlueTeam()} </div>
                    <div className="d-flex flex-row justify-content-center"> {this.displayRedTeam()} </div>
                </div>

                <div style={{width: '50%', margin: 'auto'}}>
                    <Button onClick={this.handleStart} style={{backgroundColor: "#ffbc00", color: '#343a40'}} size="lg" block>Start</Button>
                </div>
                
            </div>
        )
    }
}

export default Home
