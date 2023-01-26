import React, { Component } from 'react'

import "./BTGameTaiXiu.css"
import DatCuoc from './DatCuoc'
import ThongTin from './ThongTin'


export default class BTGameTaiXiu extends Component {
  render() {
    return (
      <div className='container-fluid py-5 text-center game-content'>
        <h1>Game Tài Xỉu</h1>
        
        <DatCuoc/>

        <ThongTin/>


      </div>
    )
  }
}
