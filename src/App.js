import React, { Component } from 'react';
import Matrix from './matrix';
import './App.css';
import Input from './input';

class App extends Component {

   state = {
     matrix: '',
     seconds: '',
     box: '',
     didSubmit: false

   }

   onMatrixChange = (e) => {
     this.setState({
       matrix: e.target.value

     })
   }
   onBoxChange = (e) => {
    this.setState({
      box: e.target.value
      
    })
  }
  onSecondsChange = (e) => {
    this.setState({
      seconds: e.target.value
      
    })
  }
  submitData = (e) =>{

    e.preventDefault();
    var matrix = this.state.matrix;
        if (matrix < 0 || matrix > 2000){
          alert("Please Enter Row values between 0 to 2000" )
          return
        }

    var seconds = this.state.seconds;
        console.log(seconds, "sec")
    if (seconds < 0 || seconds > 5){
      alert("Please Enter Seconds between 0 to 5" )
      return
    }
    var box = this.state.box;
    if (box < 0 || box > ((matrix*matrix)-1)){
      alert("Box value should be less than square of matrix value" )
      return
    }
    console.log(matrix , seconds, box);
      
    
    // Setting state again to provide values to render
     this.setState({
      didSubmit : true
     });
     
    
  }
  
  resetGame = () => {
    this.setState({
      matrix: '',
     seconds: '',
     box: '',
     didSubmit: false
    })
  }
  render() {
    console.log(this.state.matrix);
    return (
      <div className= "container">
         <Input
          didSubmit = {this.state.didSubmit}
          onMatrixChange = {this.onMatrixChange}
          onBoxChange = {this.onBoxChange}
          onSecondsChange = {this.onSecondsChange}
          matrix = {this.state.matrix}
          box = {this.state.box}
          seconds = {this.state.seconds}
          
         whenSubmit = {this.submitData}></Input>
         <button 
         onClick = {this.resetGame}
         className=" mt-2 btn btn-danger">Reset</button>
            {this.state.didSubmit?<Matrix matrixval = {this.state.matrix}
                    secondsval = {this.state.seconds}
                    boxval = {this.state.box}
            > </Matrix>:<div></div>}
      </div>

    );
  }
}   

export default App;
