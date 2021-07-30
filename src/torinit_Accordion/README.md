```
import { useState } from "react";
import ReactSpeechToText from "torinit_speech_to_text";
import "./styles.css";

 export default function App() {
  const [stopListening, setStopListening] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [originalText, setText] = useState("");
  const [interimTextValue, setInterimText] = useState("");
  const languages = [
    { label: "English", value: "en-US" },
    { label: "Hindi", value: "hi" },
    { label: "Marathi", value: "mr" },
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
        <button>{isListening ? "STOP" : "START"}</button>
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



// styles.css

button{
padding: 20px 40px;
cursor: pointer;
}

select{
  padding: 10px 50px;
  cursor: pointer;
  text-align: start;

} 
  
.App {
    font-family: sans-serif;
    text-align: center;
  }

```