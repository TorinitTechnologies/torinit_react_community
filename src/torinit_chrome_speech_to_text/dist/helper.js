"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Recognizer = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Recognizer {
  constructor(props) {
    _defineProperty(this, "finalTranscriptText", "");

    _defineProperty(this, "recognition", null);

    _defineProperty(this, "props", null);

    _defineProperty(this, "onResult", event => {
      var _this$props;

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

      if ((_this$props = this.props) !== null && _this$props !== void 0 && _this$props.onEnd) {
        this.props.onEnd({
          text: this.finalTranscriptText,
          interimText: transpileText
        });
      }
    });

    _defineProperty(this, "stop", () => {
      this.recognition.stop();
    });

    _defineProperty(this, "start", () => {
      this.recognition.start();
    });

    this.props = props;
    this.finalTranscriptText = "";
    this.recognition = new webkitSpeechRecognition();
    this.recognition.continuous = true;
    this.recognition.interimResults = true;

    this.recognition.onstart = () => {};

    this.recognition.onerror = () => {};

    this.recognition.onend = () => {};

    this.recognition.onresult = this.onResult;
  }

}

exports.Recognizer = Recognizer;