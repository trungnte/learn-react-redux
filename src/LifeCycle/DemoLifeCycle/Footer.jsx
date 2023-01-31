import React, { Component } from 'react'

export default class Footer extends Component {

  shouldComponentUpdate(newProps, newState) {
    console.log("shouldComponentUpdate Footer");
    return false;
  }



  render() {
    console.log("Render Footer");
    return (
      <div>Footer</div>
    )
  }
}
