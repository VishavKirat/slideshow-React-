import React from 'react'


const RightArrow = (props) =>{
    const {goToNextSlide}= props
    return (
       <div className="nextArrow" onClick = {goToNextSlide}>
            <div aria-hidden = 'true'>➡︎</div>
        </div>
    )
}

export default RightArrow;