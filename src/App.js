import React, { Component } from 'react';
import Slide from './Slide.js'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'

class App extends Component {
  state = {
    images : [
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
    ],
    currentIndex : 0,
    translatedValue : 0
  }

  goToPrevSlide = () =>{
    if(this.state.currentIndex === 0) {
      return this.setState((prevState)=>{
      return({currentIndex: 0})
    })
  }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translatedValue: prevState.translatedValue + (this.slideWidth())
    }));
  }

  goToNextSlide = ()  =>{
    if(this.state.currentIndex === this.state.images.length - 1) {
      return this.setState((prevState)=>{
      return({currentIndex: 0,
        translatedValue: 0})
    })
  }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translatedValue: prevState.translatedValue + -(this.slideWidth())
    }));
    
  }
  slideWidth = () => {
     return document.querySelector('.slider').clientWidth;
 }

  render() {
    return (
      <div className="slider">
        <div className="slider-wrapper" style = {{
          transform: `translateX(${this.state.translatedValue}px)`,
          transition :'transform 0.4s ease-out'
        }}>
        {
          this.state.images.map((images,i)=>(
            <Slide key={i} image={images} />
          ))
        }
        </div>
        <LeftArrow goToPrevSlide= {this.goToPrevSlide} />
        <RightArrow goToNextSlide = {this.goToNextSlide}/>
      </div>
    );
  }
}

export default App;
