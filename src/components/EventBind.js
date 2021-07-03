import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: "welcome"
        }
        // {/* approch -3 must follo this */}

        // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler () {
    //     this.setState ({
    //         message: "Good Bye!"
    //     })
    // }
    
    // {/* approch -4 must follo this */}
    clickHandler = () => {
             this.setState ({
                 message: "Good Bye!"
            })
        }

    render() {
        return (
            <div>
                <h1>{ this.state.message }</h1>
                {/* approch -1 */}
                {/* <button onClick = { this.clickHandler.bind(this) }>Click</button> */}

                {/* approch -2 */}
                {/* <button onClick = { () => this.clickHandler() }>Click</button> */}

                {/* approch -3 */}
                {/* <button onClick = { this.clickHandler }>Click</button> */}

                {/* approch -4 */}
                <button onClick = { this.clickHandler }>Click</button>

            </div>
        )
    }
}

export default EventBind
