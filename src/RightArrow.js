import React from 'react'

const RightArrow = (props) =>{
    const {handleRightClick} = props
    return (
        <div className="rightArrow" onClick= {handleRightClick}>⟾</div>
    )
}

export default RightArrow