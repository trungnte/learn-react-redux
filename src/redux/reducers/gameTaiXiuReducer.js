// cu phap tao nhanh reducer
// rxr


// ! Do các mặt xúc xắc cần thay đổi nên hình sẽ lưu ở Backend
// ! (do chưa có API nên lưu tạm ở public)
const initialState = {
  mangXucXac:[
    {id: 1, img: "./img/1.png", diem: 1},
    {id: 2, img: "./img/2.png", diem: 2},
    {id: 3, img: "./img/3.png", diem: 3},
  ],
  banChon: true, // true => tai, false => Xiu
  soBanThang: 0,
  tongSoBan: 0
}

export const gameTaiXiuReducer = (state = initialState, action) => {
  switch (action.type) {

  case "":
    return state

  default:
    return state
  }
}
