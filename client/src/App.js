import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import images from "./api-mock.json";
function App() {
  const [imageList, setImageList] = useState(images.resources)
  return (
    <div className="image-grid">
    {imageList.map((image) => (
      <img src={image.url} alt={image.publid_id}></img>
    ))}
    </div>
  );
}

export default App;
