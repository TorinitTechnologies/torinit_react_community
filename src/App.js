import { useState } from "react";
import "./styles.css";
import ReactSpeechToText from 'torinit_chrome_speech_to_text'

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
