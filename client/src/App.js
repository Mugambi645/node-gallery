import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";

import { getImages } from './api';
function App() {
  const [imageList, setImageList] = useState([]);
  const [nextCursor, setNextCursor] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  useEffect(() => {
    const fetchData = async() => {
      const resJson = await getImages();
      setImageList(resJson.resources);
      setNextCursor(resJson.next_cursor);
    }
    fetchData();
  }, []);
  const handleLoadMore = async () => {
    const resJson = await getImages(nextCursor);
    setImageList((currentImageList) => [
      ...currentImageList,
      ...resJson.resources,
    ]);
    setNextCursor(resJson.next_cursor);
  }
  return (
    <>
    <form>
      <input
      value={searchValue}
      onChange={(event) => setSearchValue(event.target.value)}
      required="required" placeholder='Enter a search value..'></input>
      <button type='submit'>Search</button>
      <button type='button'>Clear</button>
    </form>
    <div className="image-grid">
    {imageList.map((image) => (
      <img src={image.url} alt={image.publid_id}></img>
    ))}
    </div>
    <div className='footer'>
      {
        nextCursor && (
          <button onClick={handleLoadMore}>Load more</button>
        )
      }

    </div>
    </>
  );
}

export default App;
