import "./App.css";
import { Button, Carousel } from "./components/index";

function App() {
  const imgList = [
    "/assets/1.jpg",
    "/assets/2.jpg",
    "/assets/3.jpg",
    "/assets/4.jpg",
    "/assets/5.jpg",
    "/assets/6.jpg",
  ];
  return (
    <>
      <Button type="primary">mystery</Button>
      <Button type="mystery">mystery</Button>
      <Button type="danger">mystery</Button>
      <Button type="warning">mystery</Button>
      <Carousel urlList={imgList} />
    </>
  );
}

export default App;
