import React from "react";

const Contain = () => {
    return (
        React.createElement(
            'div', 
            {id: "name", className:"form-control" }, React.createElement(
                'h1', null, "helloo Zami!"
            )
        )
    );
    
}

export default Contain;