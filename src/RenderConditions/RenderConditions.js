import React, { Component } from 'react'

export default class RenderConditions extends Component {
    login = true;
    username = "asd asd";
    renderContent = () => {
        if (this.login) {
            return <p>Hello, { this.username }</p>
        }
        return <button>Login</button>
    }
  render() {
    return (
        <div>
            <h1>RenderConditions</h1>
            {/* { this.login === true ? <p>Hello, { this.username }</p> : <button>Login</button>} */}
            {this.renderContent()}
            <p>Vừa thêm vào</p>
        </div>
    )
  }
}
