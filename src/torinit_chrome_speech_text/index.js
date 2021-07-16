import React, { useEffect, useState } from "react";
import { Recognizer } from "./helper";

const ReactSpeechToText = (props) => {
  const { onListen = () => {}, onEnd = () => {} } = props;
  const [isStarted, setIsStarted] = useState(false);
  const [recognizer, setRecognizer] = useState(null);

  useEffect(() => {
    const recognizer = new Recognizer({ onEnd: props.onEnd });
    setRecognizer(recognizer);
  }, []);

  const onToggle = () => {
    isStarted ? recognizer.stop() : recognizer.start();
    setIsStarted(!isStarted);
  };

  return <div onClick={onToggle}> {props.children}</div>;
};
export default ReactSpeechToText;
