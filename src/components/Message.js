import React, { Component } from "react"

class Message extends Component
{
    constructor () {
        super()
        this.state = {
            message: "Welcome Our Website"
        }
    }
    changeMessage () {
        this.setState ({
            message: "Thank You for visiting our website"
        })
    }
    render () {
        return (
            <div>
                <h2>{this.state.message}</h2>
                <button onClick = { () => this.changeMessage() }>Change</button>
            </div>
        )
    }
}

export default Message