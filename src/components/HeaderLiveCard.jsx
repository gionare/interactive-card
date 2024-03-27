import React from "react";
import styled from "styled-components";

export default function HeaderLiveCard() {
  return (
    <Livecards>
      <div>
        <img
          className="relative-image"
          src="public/images/bg-main-mobile.png"
          alt=""
        />
      </div>
      <div>
        <img
          classname="absolute-image"
          src="public/images/bg-card-back.png"
          alt=""
        />
      </div>
    </Livecards>
  );
}

const Livecards = styled.div`
  .relative-image {
    position: relative;
  }
  .absolute-image {
    position: absolute;
    top: 80px;
    right: 0;
    width: 100px;
    height: 100px;
    border: 3px solid #73ad21;
  }
`;
