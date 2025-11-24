import useCountStore from "@/store/countStore";
import useListStore from "@/store/listStore";
import { Checkbox, Input, Textarea } from "@mantine/core";
import { useEffect, useState } from "react";

const AddBlog = () => {
  const count = useCountStore((state) => state.count);
  const addCount = useCountStore((state) => state.addCount);
  const decCount = useCountStore((state) => state.decCount);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const fetchList = useListStore((state) => state.fetchList);
  const list = useListStore((state) => state.list);
  const addItem = useListStore((state) => state.addItem);
  const delItem = useListStore((state) => state.delItem);
  // const updateItem = useListStore((state) => state.updateItem);
  // const randomId = () => Math.floor(Math.random() * 100000);

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <p>{count}</p>
      <button onClick={addCount}>addCount</button>
      <button onClick={decCount}>decCount</button>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            {/* <Checkbox
              checked={item.isFinish}
              onChange={() => updateItem(item.id)}
            ></Checkbox> */}
            <p>id:{item.id}</p>
            <p>title:{item.title}</p>
            <p>content:{item.content}</p>
            <button onClick={() => delItem(item.id)}>delItem</button>
          </li>
        ))}
      </ul>
      <form>
        <p>title:</p>
        <Input
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <p>content:</p>
        <Textarea
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          type="button"
          onClick={() => {
            addItem({
              title: title,
              content: content,
            });
            setTitle("");
            setContent("");
          }}
        >
          addItem
        </button>
      </form>
    </>
  );
};
export default AddBlog;
