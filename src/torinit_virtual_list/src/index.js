import React, { useEffect, useState } from "react";

function VirtualList(props) {
  const { items = [], renderItem = (item) => {}, height,offset=100 } = props;
  const [startIndex, setStartIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState([]);

  useEffect(() => {
    setItemsToShow(items.slice(startIndex, offset));
  }, [items.length]);

  const onScrollDown = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;

    if (bottom) {
      const newStartIndex = startIndex + offset;
      const newItemsToShow = items.slice(newStartIndex, newStartIndex + offset);
      setStartIndex(newStartIndex);
      setItemsToShow([...itemsToShow, ...newItemsToShow]);
    }
  };
  return (
    <div onScroll={onScrollDown} style={{maxHeight:height,overflowY:'auto'}}>
      {itemsToShow.map((item) => renderItem(item))}
    </div>
  );
}

export default VirtualList;
