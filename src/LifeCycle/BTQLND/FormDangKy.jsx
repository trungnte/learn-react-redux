import React, { Component } from 'react'

import { connect } from 'react-redux'
class FormDangKy extends Component {

  //! B1: lay data tu form => luu vao state
  state = {
    values: {
      taiKhoan: "",
      hoTen: "",
      matKhau: "",
      sdt: "",
      email: "",
      maLoaiND: "Khách hàng"
    },
    errors: {
      taiKhoan: "",
      hoTen: "",
      matKhau: "",
      sdt: "",
      email: "",
      maLoaiND: ""
    }
  }

  handleOnChange = (event) => {
    console.log("event.target: ", event.target);
    let {value, name} =  event.target;

    // giu lai thuoc tinh cu va gia tri moi cho thuoc tinh dang nhap
    let newValues = {...this.state.values};
    newValues[name] = value;

    let typeform = event.target.getAttribute("typeform");
    console.log("typeform:", typeform);
    let messageError = "";
    // kiem tra loi
    if (value.trim() === "") {
      messageError = `${name} khong dc de trong`;
    }

    //! kiem tra email
    let regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (typeform === "email") {
      // neu la email
      if (!regexp.test(value)) {
        // value khong dung voi dinh dang regexp
        messageError = `Email khong dung dinh dang`;
      }

    }


    let newErrors = {...this.state.errors};
    newErrors[name] = messageError;

    this.setState({values: newValues,
      errors: newErrors,
    }, ()=> {
      console.log("SetState: ", this.state);
    });
  }

  handleOnSubmit = (event) => {
    // ! Ngan load lai trang web khi submit
    event.preventDefault();
    // console.log("handleOnSubmit:");
    let isValid = true;
    //! kiem tra errors con chua noi dung nao loi khong?
    for (const property in this.state.errors) {
      if (this.state.errors[property] !== "") {
        // thuoc tinh con bi loi
        isValid = false;
        console.log("Error: ", property); // ten thuoc tinh
      }
    
    }

    //! kiem tra du lieu rong khi user khong doi gia tri, khong chay onChange
    for (const property in this.state.values) {
      if (this.state.values[property] === "") {
        // thuoc tinh rong
        isValid = false;
        console.log("property: ", property);
      }
    }

    if (isValid) {
      // khong con loi -> day values (Nguoi dung moi) len redux
      // console.log("Hop le");
      let action = {
        type: "THEM_ND",
        nd: this.state.values
      }
      this.props.dispatch(action);
    }
    else {
      alert("Form khong duoc de trong");
    }


  }

  render() {
    return (
      <div className="row">
          <div className="col-12">
            <h2 className="bg-dark text-white">Form Đăng Ký</h2>

            <form onSubmit={this.handleOnSubmit} >
              <div className="row py-3">
                <div className="col">
                  <label htmlFor="taiKhoan">Tài khoản</label>
                  <input
                    onChange={(event)=>{
                      this.handleOnChange(event);
                    }}
                    name="taiKhoan"
                    type="text"
                    className="form-control"
                    placeholder="Tài khoản"
                  />
                  <p className='text-danger'>{this.state.errors.taiKhoan}</p>
                </div>
                <div className="col">
                  <label htmlFor="hoTen">Họ tên</label>
                  <input
                    onChange={this.handleOnChange}
                    name="hoTen"
                    type="text"
                    className="form-control"
                    placeholder="Họ tên"
                  />
                  <p className='text-danger'>{this.state.errors.hoTen}</p>
                </div>
              </div>

              <div className="row py-3">
                <div className="col">
                  <label htmlFor="matKhau">Mật khẩu</label>
                  <input
                    onChange={this.handleOnChange}
                    name="matKhau"
                    type="text"
                    className="form-control"
                    placeholder="Mật khẩu"
                  />
                  <p className='text-danger'>{this.state.errors.matKhau}</p>
                </div>
                <div className="col">
                  <label htmlFor="sdt">Số điện thoại</label>
                  <input
                    onChange={this.handleOnChange}
                    name="sdt"
                    type="text"
                    className="form-control"
                    placeholder="Số điện thoại"
                  />
                  <p className='text-danger'>{this.state.errors.sdt}</p>
                </div>
              </div>

              <div className="row py-3">
                <div className="col">
                  <label htmlFor="email">Email</label>
                  <input
                    onChange={this.handleOnChange}
                    typeform="email"
                    name="email"
                    type="text"
                    className="form-control"
                    placeholder="Email"
                  />
                  <p className='text-danger'>{this.state.errors.email}</p>
                </div>
                <div className="col">
                  <label htmlFor="maLoaiND">Mã loại ND</label>

                  <select 
                    onChange={this.handleOnChange}
                    className="form-control" name="maLoaiND">
                    <option value={"Khách hàng"}>Khách hàng</option>
                    <option value={"Quản trị"}>Quản trị</option>
                  </select>
                  <p className='text-danger'>{this.state.errors.maLoaiND}</p>
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


export default connect()(FormDangKy);