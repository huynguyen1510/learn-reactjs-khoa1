import React, { Component } from 'react'
import Child from './Child'
import "./Styling.css"
import style from "./Styling.module.css"

export default class Styling extends Component {
    render() {
       const insideStyle = {
           color: "blue",
      }
    return (
        <div>
            <Child/>
            <p className={style.txtStyle}>Styling from module</p>
            <p style={insideStyle}>Styling inside component</p>

        </div>
    )
  }
}
