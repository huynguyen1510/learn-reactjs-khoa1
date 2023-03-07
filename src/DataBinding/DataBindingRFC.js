import React from 'react'

//any variable are not relative to the function,we alway put it outsite the function
const name = "aaa sss"
const student = {
    name: "Covid",
    age:19
}



export default function DataBindingRFC() {
  return (
      <div>
          <h1>React functional component</h1>
          {name}
          <b>name: { student.name }</b>
          <b>age: { student.age }</b>
    </div>
  )
}
