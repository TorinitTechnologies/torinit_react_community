"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function VirtualList(props) {
  const {
    items = [],
    renderItem = item => {},
    height
  } = props;
  const [startIndex, setStartIndex] = (0, _react.useState)(0);
  const [itemsToShow, setItemsToShow] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    setItemsToShow(items.slice(startIndex, 100));
  }, [items.length]);

  const onScrollDown = e => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;

    if (bottom) {
      const newStartIndex = startIndex + 101;
      const newItemsToShow = items.slice(newStartIndex, newStartIndex + 100);
      setStartIndex(newStartIndex);
      setItemsToShow([...itemsToShow, ...newItemsToShow]);
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    onScroll: onScrollDown,
    style: {
      maxHeight: height,
      overflowY: 'auto'
    }
  }, itemsToShow.map(item => renderItem(item)));
}

var _default = VirtualList;
exports.default = _default;