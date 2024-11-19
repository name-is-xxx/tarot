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
    "/assets/光佑此间.jpg",
  ];
  return (
    <>
      <Button type="primary">mystery</Button>
      <Button type="mystery">mystery</Button>
      <Button type="danger">mystery</Button>
      <Button type="warning">mystery</Button>
      <Carousel width={400} className="carousel" urlList={imgList} />
    </>
  );
}

export default App;
