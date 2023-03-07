import React, { Component } from 'react'

export default class HandleEvent extends Component {
    handleClick = ({ param = "okk" }) => {
        console.log(param)
    };
    
  render() {
    return (
        <div>
            <button onClick={this.handleClick}>CLick me1</button>
            <button onClick={() => {
                this.handleClick({ param : "asd" })
            }}>CLick me1</button>
      </div>
    )
  }
}
