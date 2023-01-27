import React, { Component } from 'react'

export default class TableNguoiDung extends Component {
  render() {
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
                <tr>
                  <td>1</td>
                  <td>user123</td>
                  <td>Nguyễn Khách Hàng</td>
                  <td>123456</td>
                  <td>1234567890</td>
                  <td>test@gmail.com</td>
                  <td>Khách hàng</td>
                  <td>
                    <button className="btn btn-success">Sửa</button>
                    <button className="btn btn-danger">Xoá</button>
                  </td>
                </tr>
              </tbody>
            </table>


          </div>
        </div>
    )
  }
}
