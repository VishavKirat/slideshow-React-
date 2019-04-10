import React from 'react'
import Slide from './Slide'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'

export default class App extends React.Component{
    state = {
        image :[
            {url:'https://images.unsplash.com/photo-1553783183-31ed88f8e417?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',id:0},
            {url:'https://images.unsplash.com/photo-1553778807-7763a30b402d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',id:1},
            {url:'https://images.unsplash.com/photo-1553770249-50c88d7b8534?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',id:2},
            {url:'https://images.unsplash.com/photo-1553755088-ef1973c7b4a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',id:3},
            {url:'https://images.unsplash.com/photo-1553748024-d1b27fb3f960?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',id:4},
            {url:'https://images.unsplash.com/photo-1553770710-767cf46bfef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',id:5},
            {url:'https://images.unsplash.com/photo-1553789842-67cd43ea7e4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',id:6},
            {url:'https://images.unsplash.com/photo-1553773077-91673524aafa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',id:7}
        ],
        currentIndex : 0,
    }

    handleRightClick = () =>{
        
        this.setState((prev) =>{
            return (
                {
                    currentIndex : prev.currentIndex+1
                }
            )
        })
        if(this.state.currentIndex === (this.state.image.length)-1){
            this.setState((prev) =>{
                return {currentIndex: 0}
            })
        }
    }


    handleLeftClick = () =>{
       
            this.setState((prev) =>{
                return (
                    {
                        currentIndex : prev.currentIndex-1
                    }
                )
            })
            if(this.state.currentIndex === 0){
                this.setState((prev) =>{
                    return {currentIndex: (this.state.image.length)-1}
                })
            }
        }
    
    render(){
        return (
            <div className='Slider'>
                <div className="slide-wrapper">
                    {
                    <Slide key={this.state.image[this.state.currentIndex].id} image ={this.state.image[this.state.currentIndex].url} />}
                </div>
                <LeftArrow handleLeftClick={this.handleLeftClick}/>
                <RightArrow handleRightClick = {this.handleRightClick} />
            </div>
        )
    }
}