import { useState } from "react";
import "./styles.css";
import ReactSpeechToText from "torinit_chrome_speech_text";

export default function App() {
  const [originalText, setText] = useState("");
  const [interimTextValue, setInterimText] = useState("");
  return (
    <div className="App">
      <ReactSpeechToText
        onEnd={({ text, interimText }) => {
          setText(text);
          setInterimText(interimText);
        }}
        onToggle={(isListening) => {}}
      >
        <button>Start</button>
      </ReactSpeechToText>
      <br />
      <div>
        {originalText}{" "}
        <span style={{ color: "#cccccc" }}> {interimTextValue} </span>
      </div>
    </div>
  );
}
