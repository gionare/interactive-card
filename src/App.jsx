import { useState } from "react";
import "./App.css";
import FillupForm from "./components/FillupForm";
import HeaderLiveCard from "./components/HeaderLiveCard";

function App() {
  return (
    <>
      <HeaderLiveCard></HeaderLiveCard>
      <FillupForm></FillupForm>
    </>
  );
}

export default App;
