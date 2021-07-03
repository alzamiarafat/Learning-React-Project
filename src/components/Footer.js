import React, { Component } from "react";

class Footer extends Component
{
    render(){
        const {name, children} = this.props
        // return( <label>Username: {this.props.children}</label>)
        return( <label>Username: {children}</label>)

        
    }

}

export default Footer