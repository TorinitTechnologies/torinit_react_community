"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImagePlayer = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireDefault(require("react"));

require("./ImagePlayer.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ImagePlayer = function ImagePlayer() {
  let {
    images,
    timeGap
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : props;

  const [current, setCurrent] = _react.default.useState(0);

  const [isPlaying, setPlaying] = _react.default.useState(false);

  const handlePrev = () => {
    if (current !== 0) {
      setCurrent(current - 1);
    }
  };

  const handleNext = () => {
    if (current < images.length - 1) {
      setCurrent(current + 1);
    } else setCurrent(0);
  };

  if (isPlaying) {
    setTimeout(() => {
      handleNext();
    }, timeGap || 2000);
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid',
      borderRadius: '10px',
      padding: '40px 10px',
      height: '200px',
      width: '300px'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "main-image-wrapper"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: current === 0 && 'inactive',
    onClick: handlePrev
  }, '<', " "), /*#__PURE__*/_react.default.createElement("div", {
    className: "image-wrapper"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: images[current],
    className: "img-imgWrapper",
    alt: ""
  })), /*#__PURE__*/_react.default.createElement("span", {
    className: current === images.length - 1 && 'inactive',
    onClick: handleNext
  }, '>')), isPlaying && /*#__PURE__*/_react.default.createElement("span", {
    className: "play-pause-button",
    onClick: () => setPlaying(false)
  }, '||'), !isPlaying && /*#__PURE__*/_react.default.createElement("span", {
    className: "play-pause-button",
    onClick: () => setPlaying(true)
  }, '|>'));
};

exports.ImagePlayer = ImagePlayer;