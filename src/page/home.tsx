import useCountStore from "@/store/countStore";

const Home = () => {
  const count = useCountStore((state) => state.count);
  const addCount = useCountStore((state) => state.addCount);
  const decCount = useCountStore((state) => state.decCount);
  return (
    <>
      <p>{count}</p>
      <button onClick={addCount}>addCount</button>
      <button onClick={decCount}>decCount</button>
    </>
  );
};
export default Home;
