import { useState } from "react";
import "./styles.css";
// import ReactSpeechToText from "torinit_speech_to_text";
import ReactSpeechToText from "../src/torinit_chrome_speech_to_text/src/index";
export default function App() {
  const [stopListening, setStopListening] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [originalText, setText] = useState("");
  const [interimTextValue, setInterimText] = useState("");
  const languages = [
    { label: "English", value: "en-US" },
    { label: "Hindi", value: "hi" },
  ];
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0].value);

  return (
    <div className="App">
      <ReactSpeechToText
        onEnd={({ text, interimText }) => {
          setText(text);
          setInterimText(interimText);
        }}
        onToggle={(isListening) => {
          setIsListening(isListening);
        }}
        stopListening={stopListening}
        lang={selectedLanguage}
      >
        <button>{isListening ? "Stop" : "Start"}</button>
      </ReactSpeechToText>
      <br />
      <div>
        {originalText}
        <span style={{ color: "#cccccc" }}> {interimTextValue} </span>
      </div>
      <select
        onChange={(e) => {
          setSelectedLanguage(e.target.value);
        }}
        value={selectedLanguage}
      >
        {languages.map((item) => (
          <option value={item.value} key={item.label}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}
