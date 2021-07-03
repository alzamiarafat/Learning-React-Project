import React from 'react'

function ChildComponant(props) {
    return (
        <div>
            <button onClick = { () => props.clickHandler('chlid')}>Click</button>
        </div>
    )
}

export default ChildComponant
