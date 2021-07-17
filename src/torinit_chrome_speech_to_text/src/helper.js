export class Recognizer {
  finalTranscriptText = "";
  recognition = null;
  props = null;
  constructor(props) {
    this.props = props;
    this.finalTranscriptText = "";
    this.recognition = new webkitSpeechRecognition();
    this.recognition.continuous = true;
    this.recognition.interimResults = true;
    this.recognition.onstart = () => {};
    this.recognition.onerror = () => {};
    this.recognition.lang = props.lang || "en-US";
    this.recognition.onend = () => {};
    this.recognition.onresult = this.onResult;
  }

  onResult = (event) => {
    let transpileText = "";

    if (typeof event.results == "undefined") {
      this.recognition.onend = null;
      this.recognition.stop();

      return;
    }

    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        this.finalTranscriptText += event.results[i][0].transcript;
      } else {
        transpileText += event.results[i][0].transcript;
      }
    }
    if (this.props?.onEnd) {
      this.props.onEnd({
        text: this.finalTranscriptText,
        interimText: transpileText,
      });
    }
  };

  stop = () => {
    this.recognition.stop();
  };
  start = () => {
    this.recognition.start();
  };
  setLang = (lang = "en-US") => {
    this.stop();
    setTimeout(() => {
      this.finalTranscriptText = "";
      this.recognition = new webkitSpeechRecognition();
      this.recognition.continuous = true;
      this.recognition.interimResults = true;
      this.recognition.onstart = () => {};
      this.recognition.onerror = () => {};

      this.recognition.onend = () => {};
      this.recognition.onresult = this.onResult;
      this.recognition.lang = lang;
      this.recognition.start();

    }, 400);
  };
}
