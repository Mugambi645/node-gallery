import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";

import { getImages } from './api';
function App() {
  const [imageList, setImageList] = useState([]);
  useEffect(() => {
    const fetchData = async() => {
      const resJson = await getImages();
      setImageList(resJson.resources);
    }
    fetchData();
  }, []);
  return (
    <div className="image-grid">
    {imageList.map((image) => (
      <img src={image.url} alt={image.publid_id}></img>
    ))}
    </div>
  );
}

export default App;
