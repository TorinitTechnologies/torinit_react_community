import { useState } from "react";
import ReactSpeechToText from "./react_chrome_st";
import "./styles.css";

export default function App() {
  const [originalText, setText] = useState("");
  const [interimTextValue, setInterimText] = useState("");
  return (
    <div className="App">
      <ReactSpeechToText
        onEnd={({ text, interimText }) => {
          console.log({ text, interimText }, text?.length);

          setText(originalText + (text || interimText));
          setInterimText(
            text?.length === 0 ? interimTextValue + interimText : ""
          );
        }}
      />
      {originalText}
      {/* {interimTextValue} */}
    </div>
  );
}
