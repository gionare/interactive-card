import React from "react";
import styled from "styled-components";

export default function HeaderLiveCard({ inputs }) {
  return (
    <Livecards>
      <div className="relative">
        <img src="public/images/bg-main-mobile.png" alt="" />

        <div className="absolute-card-back">
          <img src="public/images/bg-card-back.png" alt="" />
        </div>
        {/* bellow lines for tailwind styles */}
        <div className="absolute-card-front">
          <div className="relative">
            <img src="public/images/bg-card-front.png" alt="" />
            <div className="absolute">
              <div className="white-full-circle"></div>
              <div className="white-empty-circle"></div>
              <h1 className="card-number">{inputs.cardNumber}</h1>
            </div>
          </div>
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
    z-index: 1;
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
    z-index: 2;
  }
  .white-full-circle {
    position: absolute;
    background-color: #fff;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    z-index: 1; /* Ensure the circle is below the card-front */
    top: 17%; /* Adjust these values as needed */
    left: 11%; /* Adjust these values as needed */
    transform: translate(-50%, -50%);
  }
  .white-empty-circle {
    position: absolute;
    border: 1.5px solid #fff;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    z-index: 1; /* Ensure the circle is below the card-front */
    top: 18%; /* Adjust these values as needed */
    left: 23%; /* Adjust these values as needed */
    transform: translate(-50%, -50%);
  }
  h1 {
    position: absolute;
    z-index: 1; /* Ensure the circle is below the card-front */
    transform: translate(-50%, -50%);
    top: 50%; /* Adjust these values as needed */
    left: 50%; /* Adjust these values as needed */
    width: 300px;
    font-size: 25px;
    letter-spacing: 2.2px;
  }
  .absolute-card-front img {
    width: 280px;
    height: 157px;
  }
`;
