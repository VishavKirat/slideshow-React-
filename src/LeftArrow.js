import React from 'react'


const LeftArrow = (props) =>{
    const {goToPrevSlide}=props
    return (
        <div className="backArrow" onClick={goToPrevSlide}>
            <div aria-hidden = 'true'>⬅︎</div>
        </div>
    )
}

export default LeftArrow;