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
    },
    {
      taiKhoan: "user456",
      hoTen: "Nguyen Van A",
      matKhau: "abc123",
      sdt: "012345678",
      email: "test@gmail.com",
      maLoaiND: "Khách hàng"
    },
    {
      taiKhoan: "user789",
      hoTen: "Nguyen Van A",
      matKhau: "abc123",
      sdt: "012345678",
      email: "test@gmail.com",
      maLoaiND: "Khách hàng"
    }
  ],

  // FIXME: move from form dang ky
  nguoiDung: {
    // values lay tu form
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
  },

  // nguoiDungChiTiet: {
  //   taiKhoan: "user789",
  //     hoTen: "Nguyen Van A",
  //     matKhau: "abc123",
  //     sdt: "012345678",
  //     email: "test@gmail.com",
  //     maLoaiND: "Khách hàng"
  // },


  isLogin: true, // vd luu tru nhieu kieu du lieu
}

export const QLNDReducer = (state = initialState, action) => {
  switch (action.type) {
  
  case "LAY_DATA_FORM":
    // console.log("LAY_DATA_FORM: ", action);
    let newND = {
      values: action.newValues,
      errors: action.newErrors
    }
    state.nguoiDung = newND;
    // state.nguoiDung = {...newND};
    return {...state}

  case "THEM_ND":
    state.mangNguoiDung = [...state.mangNguoiDung, action.nd];
    return {...state}

  case "XOA_ND":
    //! Loc va tra ve mang moi chua nhung nguoi dung khong can xoa!
    state.mangNguoiDung = state.mangNguoiDung.filter((nd)=>{
      return nd.taiKhoan !== action.tkXoa;
    });
    state.mangNguoiDung = [...state.mangNguoiDung];
    return {...state}

  case "XEM_CHI_TIET":
    // state.nguoiDungChiTiet = action.ndXem;
    state.nguoiDung.values = action.ndXem;
    state.nguoiDung = {...state.nguoiDung};
    return {...state}

  case "CAP_NHAT":
    // Tim user trong mang (ma, id, taiKhoan)
    // find(), findIndex()
    //! dung find
    // let userFind = state.mangNguoiDung.find((nd) => {
    //   return nd.taiKhoan === action.ndCapNhat.taiKhoan
    // });
    // if (userFind) {
    //   userFind.hoTen = action.hoTen;
    //   ...
    // }

    //! dung findIndex
    let indexCapNhat = state.mangNguoiDung.findIndex((nd) => {
      return nd.taiKhoan === action.ndCapNhat.taiKhoan
    });

    // Cap nhat thong tin cua user tim dc
    if(indexCapNhat > -1) {
      state.mangNguoiDung[indexCapNhat] = action.ndCapNhat;
    }
    state.mangNguoiDung = [...state.mangNguoiDung];
    return {...state}

  default:
    return state
  }
}
