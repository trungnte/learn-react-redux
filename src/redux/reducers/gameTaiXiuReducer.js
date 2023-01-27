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
  banChon: false, // true => tai, false => Xiu
  soBanThang: 1,
  tongSoBan: 2
}

export const gameTaiXiuReducer = (state = initialState, action) => {
  switch (action.type) {

  case "DAT_CUOC":
    state.banChon = action.banChon;
    return {...state}

  case "LAC_XUC_XAC":
    
    let mangNgauNhien = [];
    for (let index = 0; index < 3; index++) {
      let num = Math.floor(Math.random() * 6) + 1;
      let xucxac = {
        id: `xx${index}`,
        img: `./img/${num}.png`,
        diem: num
      }
      mangNgauNhien.push(xucxac);
    }
    state.mangXucXac = mangNgauNhien;

    // TODO: kiem tra ket qua, tong diem >= 11 Tai
    // TODO: tong diem < 11 Xiu
    // TH1: ban CHon Tai && tong diem >=11 Tai -> thang
    // TH2: ban chon Xiu %% tong diem < 11 Xiu -> thang
    let tongDiem = state.mangXucXac.reduce((tong, xucxac, index) => {
      return tong += xucxac.diem;
    }, 0);

    if ((tongDiem >= 11 && state.banChon) || 
      (tongDiem < 11 && !state.banChon)) {

      state.soBanThang += 1;
    }
    state.tongSoBan += 1;
    return {...state}

  default:
    return state
  }
}
