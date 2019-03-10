import React, {Component } from 'react';

class Input extends Component{
    render(){
        return(
            <form onSubmit = {this.props.whenSubmit}>
                <div className="container mt-5">
                <p>Enter Rows:
                    <input 
                    disabled = {this.props.didSubmit}
                    onChange = {this.props.onMatrixChange}
                    type="number"  value = {this.props.matrix} name ="matrix" placeholder="Enter number of rows"></input>
                </p>
                <p>Enter Seconds:
                    <input
                    disabled = {this.props.didSubmit}
                    onChange = {this.props.onSecondsChange}
                    type="number" value = {this.props.seconds} name ="seconds" placeholder="Enter number of seconds"></input>
                </p>
                <p>Enter Boxes:
                    <input 
                    disabled = {this.props.didSubmit}
                    onChange = {this.props.onBoxChange}
                    type="number"  value = {this.props.box} name ="box" placeholder="Enter number of boxes to be colored"></input>
                </p>
                <button className="btn btn-primary" type="Submit">Submit</button>
                </div>
            </form>
        )
    }
}
export default Input;