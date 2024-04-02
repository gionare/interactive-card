import { useState } from "react";
import "./App.css";
import FillupForm from "./components/FillupForm";
import HeaderLiveCard from "./components/HeaderLiveCard";

function App() {
  const [inputs, setInputs] = useState({ cardNumber: "" });

  return (
    <>
      <HeaderLiveCard inputs={inputs} />
      <FillupForm inputs={inputs} setInputs={setInputs} />
    </>
  );
}

export default App;
