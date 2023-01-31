import React, { PureComponent } from "react";

export default class CardVotePureComponent extends PureComponent {

  // Updating
  // Khi vote tang thi render lai card vote
  // Nguoc lai khi number tang (vote khong doi) => khong render lai UI



  //! PureComponent Tự nhận diện props thay đổi hay không => render lại UI khi cần
  // shouldComponentUpdate(newProps, newState) {
  //   console.log("CardVote newProps: ", newProps);
  //   console.log("CardVote this.props: ", this.props);

  //   if(newProps.vote === this.props.vote ) {
  //     // gia tri cua props vote khong doi
  //     // khong render lai
  //     return false;
  //   }
  //   return true;
  // }


  render() {
    console.log("Render CardPureComponent");
    return (
      <div className="card w-25" >
        <img style={{width: '100%'}} src="https://i.pravatar.cc/?u=77" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Nguyễn Thị Hoa Hậu</h5>
          <p className="card-text">
            Vote: {this.props.vote}
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}
