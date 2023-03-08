import React, { Component } from "react";

export default class RenderWithLoop extends Component {
  productList = [
    {
      id: 1,
      name: "black car",
      price: 1000,
      img: "./assets/products/black-car.jpg",
    },
    {
      id: 2,
      name: "red car",
      price: 2000,
      img: "./assets/products/red-car.jpg",
    },
    {
      id: 3,
      name: "silver car",
      price: 3000,
      img: "./assets/products/silver-car.jpg",
    },
    {
      id: 4,
      name: "steel car",
      price: 4000,
      img: "./assets/products/steel-car.jpg",
    },
  ];

  renderTable = () => {
    let mangTrJSX = [];

    //Cách 1
    // this.productList.forEach((product) => {
    //   let trJSX = (
    //     <tr key={product.id}>
    //       <td>{product.id}</td>
    //       <td>{product.name}</td>
    //       <td>{product.price}</td>
    //       <td>
    //         <img style={{ width: "100px" }} src={product.img} alt=""/>
    //       </td>
    //     </tr>
    //   );
    //   mangTrJSX.push(trJSX);
    // });

    //Cách 2
    mangTrJSX = this.productList.map((product, index) => {
      return (
        <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>
            <img style={{ width: "100px" }} src={product.img} alt="" />
          </td>
        </tr>
      );
    });

    return mangTrJSX;
  };
  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>price</th>
              <th>image</th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
}
