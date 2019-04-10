import React from 'react'

const LeftArrow = (props) =>{
    const {handleLeftClick} = props
    return (
        <div className="leftArrow" onClick ={handleLeftClick}>⟽</div>
    )
}

export default LeftArrow