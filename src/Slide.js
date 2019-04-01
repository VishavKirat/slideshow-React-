import React from 'react'


const Slide = (props) =>{
    const {image} = props;
    const styles = {
        backgroundImage : `url(${image})`,
        backgroundSize : 'cover',
        backgroundRepeat : 'no-repeat',
        backgroundPoistion : 'center'
    }
    return (
        <div className="slide" style = {styles}>
       
        </div>
    )
}

export default Slide;