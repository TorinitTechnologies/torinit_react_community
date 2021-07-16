import React, { useEffect, useState } from "react";

const ReactSpeechToText = (props) => {
  const { onListen = () => {}, onEnd = () => {} } = props;
  let finalTranscriptText = "";
  const [isStarted, setIsStarted] = useState(false);
  let recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;

  useEffect(() => {
    let transpileText = "";
    recognition.onstart = () => {};
    recognition.onerror = () => {};

    recognition.onend = () => {};
    recognition.onresult = function (event) {
      if (typeof event.results == "undefined") {
        recognition.onend = null;
        recognition.stop();

        return;
      }

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscriptText += event.results[i][0].transcript;
        } else {
          transpileText = event.results[i][0].transcript;
        }
      }
      onEnd({ text: finalTranscriptText, interimText: transpileText });
    };
  }, []);

  const stop = () => {
    recognition.stop();
  };
  const onToggle = () => {
    isStarted ? stop() : recognition.start();
    setIsStarted(!isStarted);
  };

  return <button onClick={onToggle}>{isStarted ? "stop" : " start"}</button>;
};
export default ReactSpeechToText;
