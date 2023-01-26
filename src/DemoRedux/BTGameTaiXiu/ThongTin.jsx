import React, { Component } from 'react'

export default class ThongTin extends Component {
  render() {
    return (
      <div className="row m-5">
          <div className="col-12 text-center info">
            <p>Bạn chọn: <span className='text-danger'>Tài</span></p>
            <p>Số bàn thắng: <span className='text-success'>0</span></p> 
            <p>Tổng số bàn: <span className='text-info'>0</span></p> 
            <button className='btn btn-success'>Play Game</button>
          </div>
        </div>
    )
  }
}
