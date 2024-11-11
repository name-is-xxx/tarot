import "./App.css";
import { Button, Carousel } from "./components/index";

function App() {
  return (
    <>
      <Button type="primary">mystery</Button>
      <Button type="mystery">mystery</Button>
      <Button type="danger">mystery</Button>
      <Button type="warning">mystery</Button>
      <Carousel />
    </>
  );
}

export default App;
