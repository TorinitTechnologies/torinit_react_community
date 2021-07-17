"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Recognizer = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Recognizer {
  constructor(props) {
    var _this = this;

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

    _defineProperty(this, "setLang", function () {
      let lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "en-US";

      _this.stop();

      setTimeout(() => {
        _this.finalTranscriptText = "";
        _this.recognition = new webkitSpeechRecognition();
        _this.recognition.continuous = true;
        _this.recognition.interimResults = true;

        _this.recognition.onstart = () => {};

        _this.recognition.onerror = () => {};

        _this.recognition.onend = () => {};

        _this.recognition.onresult = _this.onResult;
        _this.recognition.lang = lang;

        _this.recognition.start();
      }, 400);
    });

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

}

exports.Recognizer = Recognizer;