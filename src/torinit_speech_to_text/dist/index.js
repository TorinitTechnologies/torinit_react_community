"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _helper = require("./helper");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const ReactSpeechToText = props => {
  const {
    onListen = () => {},
    onToggle = () => {},
    onEnd = () => {},
    stopListening = false,
    lang = "en-US"
  } = props;
  const [isStarted, setIsStarted] = (0, _react.useState)(false);
  const [recognizer, setRecognizer] = (0, _react.useState)(null);
  (0, _react.useEffect)(() => {
    const recognizer = new _helper.Recognizer({
      onEnd: props.onEnd
    });
    setRecognizer(recognizer);
  }, []);
  (0, _react.useEffect)(() => {
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
  (0, _react.useEffect)(() => {
    if (recognizer && isStarted) {
      recognizer.setLang(lang);
    } else {
      if (!isStarted) {
        const recognizer = new _helper.Recognizer({
          onEnd: props.onEnd,
          lang: lang
        });
        setRecognizer(recognizer);
      }
    }
  }, [lang]);

  const onToggleHandler = () => {
    isStarted ? recognizer.stop() : recognizer.start();
    onToggle(!isStarted);
    setIsStarted(!isStarted);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    onClick: onToggleHandler
  }, " ", props.children);
};

var _default = ReactSpeechToText;
exports.default = _default;