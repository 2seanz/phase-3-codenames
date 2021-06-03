import React, { Component } from 'react'

class Credits extends Component {
    render() {
        return (
            <div className="d-flex align-items-center" style={{height: '100vh', fontWeight: 'bold', fontSize: '5em'}}>
                {`${this.props.state == 0? 'NO' : this.props.state} TEAM WINS`}
            </div>
        )
    }
}

export default Credits