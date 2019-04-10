import React from 'react'

const Slide = (props)=>{
    const {image} = props
    const style = {
        background : `url(${image})`,
        backgroundSize : 'cover',
        backgroundRepeat : 'no-repeat',
        backgroundPosition : 'center'
    }

 return (
     <div className={"slide active"} style= {style}>
     </div>
 )
}
export default Slide