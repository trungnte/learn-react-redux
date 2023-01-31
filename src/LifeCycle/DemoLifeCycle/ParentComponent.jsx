import React, { Component } from "react";
import CardVote from "./CardVote";
import CardVotePureComponent from "./CardVotePureComponent";
import ChildComponent from "./ChildComponent";
import Footer from "./Footer";

export default class ParentComponent extends Component {
  /**
   * Mounting chay khi load ung dung
   * Updating chay khi co su thay doi cua state, props =>
   *  render lai UI
   * => props thay doi: khi lam thay doi data cua reducer =>
   *          mapStateToProps => props thay doi
   *                    khi state cua component cha thay doi
   *          va co truyen state xuong props cua con
   * => state: thay doi khi setState
   *
   * Unmounting:
   *
   * */

  //! phuong thuc khoi tao
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      vote: 0,
    };
    console.log("constructor Parent");
  }

  //! 2 luong:
  //! Mounting va Updating
  static getDerivedStateFromProps(newProps, currentState) {
    // khi chay updating thi co the quy dinh state duoc update hay khong
    console.log("getDerivedStateFromProps Parent");
    return null;
  }

  // chay truoc render, updating
  shouldComponentUpdate(newProps, newState) {
    //! quy dinh duoc render lai UI hay khong
    // return true => duoc render lai
    // return false => duoc render lai
    console.log("shouldComponentUpdate Parent");
    return true;
  }

  renderChild = () => {
    if (this.state.number < 2) {
      return <ChildComponent number={this.state.number}/>
      
    }
    else {
      return "";
    }
  }

  render() {
    console.log("render Parent");
    return (
      <div className="container py-5">
        <p>Parent</p>
        <div className="py-5">
          <span>{this.state.number}</span>
          <button
            onClick={() => {
              this.setState({
                number: this.state.number + 1,
              });
            }}
            className="btn btn-danger"
          >
            +
          </button>
        </div>


        {/* <ChildComponent number={this.state.number} /> */}
        {this.renderChild()}

        <p>Vote</p>

        <button
          onClick={() => {
            this.setState({
              vote: this.state.vote + 1,
            });
          }}
          className="btn btn-danger"
        >
          +
        </button>
        <CardVote vote={this.state.vote} />

        <CardVotePureComponent vote={this.state.vote}/>
        <Footer />
      </div>
    );
  }

  //!
  // Sau khi render, sau khi UI da load len
  //! Chay sau khi render giao dien (mounting)
  componentDidMount(prevProps, prevState) {
    // cac thu vien phu => co UI thi moi gan hieu ung
    // goi cac ham cua thu vien de gan hieu ung
    console.log("componentDidMount Parent");
  }

  //! Chay sau khi render giao dien (updating)
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate Parent");
  }

  // se duoc goi o thoi diem truoc khi component bi xoa khoi UI
  componentWillUnmount() {
    console.log("componentWillUnmount Parent");
  }


}
