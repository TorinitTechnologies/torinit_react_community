```
import { useState } from "react";
import ReactSpeechToText from "torinit_speech_to_text";

export default function App() {
  const [isListening, setIsListening] = useState(false);
  const [originalText, setText] = useState("");
  const [interimTextValue, setInterimText] = useState("");
  return (
    <div >
      <ReactSpeechToText
        onEnd={({ text, interimText }) => {
          setText(text);
          setInterimText(interimText);
        }}
        onToggle={(isListening) => {
          setIsListening(isListening);
        }}
      >
        <button>{isListening ? "Stop" : "Start"}</button>
      </ReactSpeechToText>
      <br />
      <div>
        {originalText}
        <span style={{ color: "#cccccc" }}> {interimTextValue} </span>
      </div>
    </div>
  );
}

```