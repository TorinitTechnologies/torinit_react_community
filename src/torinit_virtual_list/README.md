```
 import VirtualList from "torinit_virtual_list";

export default function App() {
  const arr = Array(100000)
    .fill("")
    .map((i, index) => "item " + index);
  return (
    <div>
      <VirtualList
        items={arr}
        height={400}
        renderItem={(item) => <div>{item}</div>}
      />
    </div>
  );
}


```