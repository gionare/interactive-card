import React from "react";
import styled from "styled-components";

export default function HeaderLiveCard() {
  return (
    <Livecards>
      <div className="relative">
        <img src="public/images/bg-main-mobile.png" alt="" />

        <div className="absolute-card-back">
          <img src="public/images/bg-card-back.png" alt="" />
        </div>
        <div className="absolute-card-front">
          <img src="public/images/bg-card-front.png" alt="" />
        </div>
      </div>
    </Livecards>
  );
}

const Livecards = styled.div`
  .relative {
    position: relative;
  }
  .absolute-card-back {
    position: absolute;
    top: 30px;
    left: 70px;
    /* border: 3px solid #73ad21; */
  }
  .absolute-card-back img {
    width: 280px;
    height: 157px;
  }
  .absolute-card-front {
    position: absolute;
    top: 120px;
    left: 20px;
  }
  .absolute-card-front img {
    width: 280px;
    height: 157px;
  }
`;
