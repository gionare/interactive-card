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
        <div className="row">
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
  display: flex;
  flex-direction: column;
  width: 400px;

  .row {
    display: flex;
    flex-direction: row;
  }
`;
