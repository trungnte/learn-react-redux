import React, { Component } from "react";

import {connect} from "react-redux";

//! Sử dụng hình trong jsx jsxx=> import hình
import xucxac1 from "../../asset/img/1.png"
import xucxac2 from "../../asset/img/2.png"
import xucxac3 from "../../asset/img/3.png"

class DatCuoc extends Component {
  renderXucXac = () => {
    return this.props.mangXucXac.map((xucxac, index) => {
      return <img key={xucxac.id} className="xucxac" src={xucxac.img} alt="" />
    });
  }


  render() {
    console.log("props Dat cuoc: ", this.props);
    return (
      <div className="row m-5">
        <div className="col-3">
          <button onClick={() => {
            this.props.datCuoc(true);
          }} className="btn btn-info btn-datcuoc">Tài</button>
        </div>

        <div className="col-6">
          {/* <img className="xucxac" src={xucxac1} alt="" />
          <img className="xucxac" src={xucxac2} alt="" />
          <img className="xucxac" src={xucxac3} alt="" /> */}
          {this.renderXucXac()}
        </div>

        <div className="col-3">
          <button onClick={ () => {
            this.props.datCuoc(false);
          } } className="btn btn-danger btn-datcuoc">Xỉu</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    mangXucXac: rootReducer.gameTaiXiuReducer.mangXucXac
  }
}

// Tạo 1 dispatch riêng giúp đẩy data lên store
const mapDispatchToProps = (dispatch) => {
  // return vao props 1 ham dispatch
  return {
    datCuoc: (banDatCuoc) => { 
      const action = {
        type: "DAT_CUOC",
        banChon: banDatCuoc
      }
      dispatch(action);
    }
  }
}

//! Kết nối component tới store
export default connect(mapStateToProps, mapDispatchToProps)(DatCuoc);