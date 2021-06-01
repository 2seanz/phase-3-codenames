import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import FormControl from 'react-bootstrap/FormControl'

class Home extends Component {

    state = {
        playerNum: 0,
        players: [],
        blueTeam: [],
        redTeam: []
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

    displayForm = () => {
        // console.log("we made it bishhh")

         const ourForm = Array(this.state.playerNum).fill().map((item, index) => (
            <Form.Group controlId="playerNames">                
                <Form.Control 
                    type="name" 
                    placeholder={`Enter Name of Player ${index + 1}`} 
                    onChange={(event) => this.handleFormChange(event,index)}/>
            </Form.Group>
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
                <div>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                        </Form>
                        </Navbar.Collapse>
                    </Navbar>
                    <DropdownButton
                        key={variant}
                        id={`dropdown-variants-${variant}`}
                        variant={variant.toLowerCase()}
                        title={"Number of players"}>                            

                    {[4,5,6,7,8,9,10].map(item => <Dropdown.Item 
                                                        key={item} 
                                                        eventKey={item.toString()}
                                                        onClick={(event)=>this.handleClick(event,item)}
                                                        >{item} Players</Dropdown.Item>)}
                    {/* <Dropdown.Divider /> */}
                    {/* <Dropdown.Item eventKey="4">Separated link</Dropdown.Item> */}
                    </DropdownButton>
                    <Form onSubmit={(event)=>this.handleSubmit(event)}>
                        <Form.Label>Name</Form.Label>
                        {this.displayForm()}
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </div>
                <div>Team Sorting</div>
                <div>
                    <Button onClick={this.handleStart} variant="primary" size="lg" block>
                        Start
                    </Button>
                </div>
                
            </div>
        )
    }
}

export default Home
