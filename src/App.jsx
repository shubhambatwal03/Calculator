import Display from "./components/Display";
import Styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";
import Heading from "./components/Heading";

function App() {
  const [CalVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(CalVal);
      setCalVal(result);
    } else {
      const newDisplayVal = CalVal + buttonText;
      setCalVal(newDisplayVal);
    }
    console.log(buttonText);
  };
  return (
    <div id={Styles.calculator}>
      <Heading />
      <Display displayValue={CalVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
  );
}

export default App;
