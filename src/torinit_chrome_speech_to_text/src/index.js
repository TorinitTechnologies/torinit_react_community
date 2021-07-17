import React, { useEffect, useState } from "react";
import { Recognizer } from "./helper";

const ReactSpeechToText = (props) => {
  const { onListen = () => {},onToggle=()=>{}, onEnd = () => {} } = props;
  const [isStarted, setIsStarted] = useState(false);
  const [recognizer, setRecognizer] = useState(null);

  useEffect(() => {
    const recognizer = new Recognizer({ onEnd: props.onEnd });
    setRecognizer(recognizer);
  }, []);

  const onToggleHandler = () => {
    isStarted ? recognizer.stop() : recognizer.start();
    onToggle(!isStarted)
    setIsStarted(!isStarted);
    
  };

  return <div onClick={onToggleHandler}> {props.children}</div>;
};
export default ReactSpeechToText;
