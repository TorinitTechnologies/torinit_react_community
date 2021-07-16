"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const ReactSpeechToText = props => {
  const {
    onListen = () => {},
    onEnd = () => {}
  } = props;
  let finalTranscriptText = "";
  const [isStarted, setIsStarted] = (0, _react.useState)(false);
  let recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  (0, _react.useEffect)(() => {
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

      onEnd({
        text: finalTranscriptText,
        interimText: transpileText
      });
    };
  }, []);

  const stop = () => {
    recognition.stop();
  };

  const onToggle = () => {
    isStarted ? stop() : recognition.start();
    setIsStarted(!isStarted);
  };

  return /*#__PURE__*/_react.default.createElement("button", {
    onClick: onToggle
  }, isStarted ? "stop" : " start");
};

var _default = ReactSpeechToText;
exports.default = _default;