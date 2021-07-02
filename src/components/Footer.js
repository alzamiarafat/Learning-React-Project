import React, { Component } from "react";

class Footer extends Component
{
    render(){
        return( <label>Username: {this.props.children}</label>)
        
    }

}

export default Footer