import React, { Component } from 'react'

export default class State extends Component {
    //state là thuộc tính có sẵn của class component giúp định nghĩa những nội dung có khả năng thay đổi khi người dùng thao tác sự kiện
    state = {
        status : false,
    }


    userLogin = {
        name: "abc",
        age: 20
    }

    renderUserLogin = () => {
        if (this.state.status) {
            return (
                <div>
                    <b>Name:{this.userLogin.name}</b> 
                    <b>Age:{this.userLogin.age}</b> 
                </div>
            );
        }
        return <button onClick={()=>{this.handleStatus()}}>Đăng nhập</button>
    }

    handleStatus = () => {
        this.setState({
            status: true,
        })
    }

  render() {
    return (
        <div>
            {this.renderUserLogin()}
        </div>
    )
  }
}
