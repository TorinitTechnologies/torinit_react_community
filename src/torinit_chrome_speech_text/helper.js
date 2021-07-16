export class Recognizer {
  finalTranscriptText = "";
  recognition = null;
  constructor(props) {
    let transpileText = "";
    this.recognition = new webkitSpeechRecognition();
    this.recognition.continuous = true;
    this.recognition.interimResults = true;
    this.recognition.onstart = () => {};
    this.recognition.onerror = () => {};

    this.recognition.onend = () => {};
    this.recognition.onresult = function (event) {
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
      if (props.onEnd) {
        props.onEnd({
          text: finalTranscriptText,
          interimText: transpileText,
        });
      }
    };
  }

  stop = () => {
    this.recognition.stop();
  };
  start = () => {
    this.recognition.start();
  };
}
