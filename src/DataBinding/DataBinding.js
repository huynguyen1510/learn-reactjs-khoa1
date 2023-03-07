import React, { Component } from "react";

export default class DataBinding extends Component {
  //THuộc tính
  name = "this is name";

  renderImage = () => {
    return (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
        alt=""
      />
    );
  };

  renderMultiComponent = () => {
    //return có dấu ngoặc đơn là do trả về jsx xuống dòng, nếu jsx cùng dòng thì không cần dấu ngoặc đơn
    return (
      <nav className="nav justify-content-center">
        <a className="nav-link active" href="https://google.com">
          Active link
        </a>
        <a className="nav-link" href="https://google.com">
          Link
        </a>
        <a className="nav-link disabled" href="https://google.com">
          Disabled link
        </a>
      </nav>
    );
  };

  render() {
    //this variable can only use for render function
    const school = "aaa";
    return (
      <div>
        <h1>React class components</h1>
        {this.name}:{school}
        <h3>{this.renderImage()}</h3>
        <h3>{this.renderMultiComponent()}</h3>
      </div>
    );
  }
}
