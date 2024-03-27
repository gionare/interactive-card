import React, { useState } from "react";
import styled from "styled-components";

export default function FillupForm() {
  const [inputs, setInputs] = useState({});

  // https://www.w3schools.com/react/react_forms.asp
  const handleChange = (event) => {
    const name = event.target.name;
    const cardNumber = event.target.value;
    setInputs((values) => ({ ...values, [name]: values }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };

  return (
    <CardFillUpStyled onSubmit={handleSubmit}>
      <label htmlFor="cardholder-name">
        Cardholder Name
        <input
          type="text"
          placeholder="e.g. Giorgi Nareklishvili"
          value={inputs.cardHolderNames}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="card-number">
        Card Number
        <input
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
          value={inputs.cardNumbers}
          onChange={handleChange}
        />
      </label>
      <div className="datendcvc-div">
        <label htmlFor="exp-date">
          Exp. Date (MM/YY)
          <input type="number" placeholder="MM" onChange={handleChange} />
          <input type="number" placeholder="YY" onChange={handleChange} />
        </label>
        <label htmlFor="cvc">
          CVC
          <input type="number" placeholder="e.g. 123" onChange={handleChange} />
        </label>
      </div>
      <button onClick={handleSubmit}>Confirm</button>
    </CardFillUpStyled>
  );
}

const CardFillUpStyled = styled.form`
  width: 375px;
  padding: 40px 0 45px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  gap: 10px;

  label {
    font-size: 12px;
    margin-left: 25px;
    font-weight: 500;
    letter-spacing: 2px;
    padding: 0px 45px 10px 0px;
    text-align: left;
    color: #21092f;
    text-transform: uppercase;
  }

  input {
    width: 327px;
    height: 45px;
    margin: 9px 0 0;
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
    margin: auto;
    padding: 15px 130px 15px 129px;
    border-radius: 8px;
    background-color: #21092f;
  }
`;
