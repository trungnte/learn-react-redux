const initialState = {
  // ! nen luu state (gia tri khoi tao) la doi tuong, de dang luu tru them cac du lieu
  mangNguoiDung: [
    {
      taiKhoan: "user123",
      hoTen: "Nguyen Van A",
      matKhau: "abc123",
      sdt: "012345678",
      email: "test@gmail.com",
      maLoaiND: "Khách hàng"
    }
  ],
  isLogin: true, // vd luu tru nhieu kieu du lieu
}

export const QLNDReducer = (state = initialState, action) => {
  switch (action.type) {

  // case "":
  //   return { ...state, ...payload }

  default:
    return state
  }
}
