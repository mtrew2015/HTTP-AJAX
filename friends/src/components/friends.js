import React, { Component } from 'react'

export default class Friends extends Component {
  render() {
    return (
      <div>
        <ol>
          {this.props.data.map((friend) => {
            return (
              <div key={friend.id}>
                <li> <span>Name: {friend.name} , Age: {friend.age}, Email: {friend.email} </span> </li>
              </div>
            )
          })}
        </ol>
      </div>

    )
  }
}


