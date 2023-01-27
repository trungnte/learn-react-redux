import React, { Component } from 'react'

export default class FormDangKy extends Component {
  render() {
    return (
      <div className="row">
          <div className="col-12">
            <h2 className="bg-dark text-white">Form Đăng Ký</h2>

            <form>
              <div className="row py-3">
                <div className="col">
                  <label htmlFor="taiKhoan">Tài khoản</label>
                  <input
                    name="taiKhoan"
                    type="text"
                    className="form-control"
                    placeholder="Tài khoản"
                  />
                </div>
                <div className="col">
                  <label htmlFor="hoTen">Họ tên</label>
                  <input
                    name="hoTen"
                    type="text"
                    className="form-control"
                    placeholder="Họ tên"
                  />
                </div>
              </div>

              <div className="row py-3">
                <div className="col">
                  <label htmlFor="matKhau">Mật khẩu</label>
                  <input
                    name="matKhau"
                    type="text"
                    className="form-control"
                    placeholder="Mật khẩu"
                  />
                </div>
                <div className="col">
                  <label htmlFor="sdt">Số điện thoại</label>
                  <input
                    name="sdt"
                    type="text"
                    className="form-control"
                    placeholder="Số điện thoại"
                  />
                </div>
              </div>

              <div className="row py-3">
                <div className="col">
                  <label htmlFor="email">Email</label>
                  <input
                    name="email"
                    type="text"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="col">
                  <label htmlFor="maLoaiND">Mã loại ND</label>

                  <select className="form-control" name="maLoaiND">
                    <option value={"Khách hàng"}>Khách hàng</option>
                    <option value={"Quản trị"}>Quản trị</option>
                  </select>
                </div>
              </div>

              <div className="py-3">
                <button className="btn btn-success mr-5">Submit</button>
                <button className="btn btn-info">Reset</button>
              </div>
            </form>
          </div>
        </div>
    )
  }
}
