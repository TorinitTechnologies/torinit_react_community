import { useState } from "react";
import "./styles.css";
// import ReactSpeechToText from 'torinit_chrome_speech_to_text'
import ReactSpeechToText from "./torinit_chrome_speech_text";

export default function App() {
  const [originalText, setText] = useState("");
  const [interimTextValue, setInterimText] = useState("");
  return (
    <div className="App">
      <ReactSpeechToText
        onEnd={({ text, interimText }) => {
          setText(originalText + (text || interimText));
          setInterimText(
            text?.length === 0 ? interimTextValue + interimText : ""
          );
        }}
        onToggle={(isListening) => {}}
      >
        <button>Start</button>
      </ReactSpeechToText>
      {originalText}
      {/* {interimTextValue} */}
    </div>
  );
}
