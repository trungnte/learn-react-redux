import React, { Component } from 'react'

import { connect } from 'react-redux'
class ThongTin extends Component {
  render() {
    console.log("props ThongTin: ", this.props);
    let {banChon, soBanThang, tongSoBan} = this.props;
    return (
      <div className="row m-5">
          <div className="col-12 text-center info">
            <p>Bạn chọn: <span className='text-danger'>
              {banChon? "Tài": "Xỉu"}
            </span></p>
            <p>Số bàn thắng: <span className='text-success'>
              {soBanThang}
            </span></p> 
            <p>Tổng số bàn: <span className='text-info'>
              {tongSoBan}
            </span></p> 
            <button onClick={ () => {
              const action = {
                type: "LAC_XUC_XAC"
              }
              this.props.dispatch(action);
            } } className='btn btn-success'>Play Game</button>
          </div>
        </div>
    )
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    banChon: rootReducer.gameTaiXiuReducer.banChon,
    soBanThang: rootReducer.gameTaiXiuReducer.soBanThang,
    tongSoBan: rootReducer.gameTaiXiuReducer.tongSoBan
  }
}

export default connect(mapStateToProps)(ThongTin);

