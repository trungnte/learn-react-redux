import React, { Component } from "react";

import {connect} from "react-redux";

//! Sử dụng hình trong jsx jsxx=> import hình
import xucxac1 from "../../asset/img/1.png"
import xucxac2 from "../../asset/img/2.png"
import xucxac3 from "../../asset/img/3.png"

export default class DatCuoc extends Component {
  render() {
    console.log("props Dat cuoc: ", this.props);
    return (
      <div className="row m-5">
        <div className="col-3">
          <button className="btn btn-info btn-datcuoc">Tài</button>
        </div>

        <div className="col-6">
          <img className="xucxac" src={xucxac1} alt="" />
          <img className="xucxac" src={xucxac2} alt="" />
          <img className="xucxac" src={xucxac3} alt="" />
        </div>

        <div className="col-3">
          <button className="btn btn-danger btn-datcuoc">Xỉu</button>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (rootReducer) => {
//   return {
//     mangXucXac: rootReducer.gameTaiXiuReducer.mangXucXac
//   }
// }

//! Kết nối component tới store
// export default connect()(DatCuoc);