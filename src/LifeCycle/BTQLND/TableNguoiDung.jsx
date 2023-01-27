import React, { Component } from 'react'

import { connect } from 'react-redux';
class TableNguoiDung extends Component {

  renderTable = () => {
    let stt = 1;
    return this.props.mangNguoiDung.map((nd) => {
      return <tr key={nd.taiKhoan}>
                <td>{stt++}</td>
                <td>{nd.taiKhoan}</td>
                <td>{nd.hoTen}</td>
                <td>{nd.matKhau}</td>
                <td>{nd.sdt}</td>
                <td>{nd.email}</td>
                <td>{nd.maLoaiND}</td>
                <td>
                  <button className="btn btn-success">Sửa</button>
                  <button className="btn btn-danger">Xoá</button>
                </td>
              </tr>
    });
  }

  render() {
    console.log("TableND: ", this.props);
    return (
      <div className="row">
          <div className="col-12">
            <h2>Danh Sách Người Dùng</h2>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">STT</th>
                  <th scope="col">Tài khoản</th>
                  <th scope="col">Họ tên</th>
                  <th scope="col">Mật khẩu</th>
                  <th scope="col">Số đt</th>
                  <th scope="col">Email</th>
                  <th scope="col">Mã loại</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {this.renderTable()}
              </tbody>
            </table>


          </div>
        </div>
    )
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    mangNguoiDung: rootReducer.QLNDReducer.mangNguoiDung
  }
}

export default connect(mapStateToProps)(TableNguoiDung);