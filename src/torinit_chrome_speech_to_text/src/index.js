import React, { useEffect, useState } from "react";
import { Recognizer } from "./helper";

const ReactSpeechToText = (props) => {
  const {
    onListen = () => {},
    onToggle = () => {},
    onEnd = () => {},
    stopListening = false,
    lang = "en-US",
  } = props;
  const [isStarted, setIsStarted] = useState(false);
  const [recognizer, setRecognizer] = useState(null);

  useEffect(() => {
    const recognizer = new Recognizer({ onEnd: props.onEnd });
    setRecognizer(recognizer);
  }, []);

  useEffect(() => {
    if (recognizer) {
      if (stopListening) {
        recognizer.stop();
        onToggle(false);
        setIsStarted(false);
      } else {
        if (!isStarted) {
          recognizer.start();
        }
      }
    }
  }, [stopListening]);

  useEffect(() => {
    if (recognizer) {
      recognizer.setLang(lang);
    }
  }, [lang]);

  const onToggleHandler = () => {
    isStarted ? recognizer.stop() : recognizer.start();
    onToggle(!isStarted);
    setIsStarted(!isStarted);
  };

  return <div onClick={onToggleHandler}> {props.children}</div>;
};
export default ReactSpeechToText;
