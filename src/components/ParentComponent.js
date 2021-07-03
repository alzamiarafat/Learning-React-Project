import React, { Component } from 'react'
import ChildComponant from './ChildComponant'

class ParentComponent extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            parentName: "parent"
             
        }

        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler (childName) {
        alert (`Hello ${this.state.parentName} from ${childName}!`)
    }
    
    render() {
        return (
            <div>
                <ChildComponant clickHandler = {this.clickHandler}/>
                
            </div>
        )
    }
}

export default ParentComponent
