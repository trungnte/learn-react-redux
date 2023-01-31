import React, { Component } from 'react'

export default class ChildComponent extends Component {

  //! phuong thuc khoi tao
  constructor(props){
    super(props);
    this.state={}
    console.log("constructor Child");
    this.notifyStories = {}
  }

  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps Child");
    return null;
  }

  // chay truoc render, updating
  shouldComponentUpdate(newProps, newState) {
    //! quy dinh duoc render lai UI hay khong
    // return true => duoc render lai
    // return false => duoc render lai
    console.log("shouldComponentUpdate Child");
    return true;
  }

  render() {
    console.log("render Child");
    return (
      <div>
        <p>ChildComponent</p>
        <p>{this.props.number}</p>
      </div>
    )
  }

  //! Chay sau khi render giao dien
  componentDidMount(prevProps, prevState) {
    console.log("componentDidMount Child");
    // sau khi load xong ung dung chay interval
    this.notifyStories = setInterval(() => {
      console.log("Check stories")
    }, 1000);
  }


  //! Chay sau khi render giao dien (updating)
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate Child")
  }

  // se duoc goi o thoi diem truoc khi component bi xoa khoi UI
  // co 1 doan code chay thong bao ve stories (thong bao moi giay 1 lan) => khi ma component bien mat thi can tat thong bao
  componentWillUnmount() {
    console.log("componentWillUnmount Child");
    clearInterval(this.notifyStories);
  }
}