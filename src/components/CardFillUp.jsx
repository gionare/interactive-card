import React from "react";
import styled from "styled-components";

export default function CardFillUp() {
  return (
    <>
      <CardFillUpStyled>
        <label htmlFor="cardholder-name">
          Cardholder Name
          <input type="text" placeholder="e.g. Giorgi Nareklishvili" />
        </label>
        <label htmlFor="card-number">
          Card Number
          <input type="text" placeholder="e.g. 1234 5678 9123 0000" />
        </label>
        <div className="datendcvc-div">
          <label htmlFor="exp-date">
            Exp. Date (MM/YY)
            <input type="number" placeholder="MM" />
            <input type="number" placeholder="YY" />
          </label>
          <label htmlFor="cvc">
            CVC
            <input type="number" placeholder="e.g. 123" />
          </label>
        </div>
        <button onClick={""}>Confirm</button>
      </CardFillUpStyled>
    </>
  );
}

const CardFillUpStyled = styled.div`
  width: 375px;
  padding: 0 0 45px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  gap: 10px;

  label {
    width: 140px;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 2px;
    padding: 0px 45px 10px 0px;
    text-align: left;
    color: #21092f;
  }

  input {
    width: 327px;
    height: 45px;
    border-radius: 8px;
    border: solid 1px #dfdee0;
    background-color: #fff;
  }
  .datendcvc-div {
    display: flex;
    flex-direction: row;
    justify-content: center;

    input {
      width: 72px;
    }
  }

  button {
    width: 327px;
    height: 53px;
    margin: 28px 0 0;
    padding: 15px 130px 15px 129px;
    border-radius: 8px;
    background-color: #21092f;
  }
`;
