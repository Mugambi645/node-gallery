import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";

import { getImages, searchImages } from './api';
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
  const handleFormSubmit = async(event) => {
    event.preventDefault();
    const resJson = await searchImages(searchValue, nextCursor);
    setImageList(resJson.resources);
    setNextCursor(resJson.next_cursor);

  }
  const resetForm = async() => {
    const resJson = await getImages();
    setImageList(resJson.resources);
    setNextCursor(resJson.next_cursor);
    setSearchValue('');
  }
  return (
    <>
    
    <form onSubmit={handleFormSubmit} className='p-6'>
    <div class="flex items-center justify-center ">
    <div class="flex border-2 border-gray-200 rounded">
        <input type="text" 
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        class="px-4 py-2 w-80" placeholder="Search... " required='required'></input>
        <button class="px-4 text-white bg-gray-600 border-l ">
            Search
        </button>
        </div>
        <button onClick={resetForm} class="bg-red-500 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded">
  Clear
</button>

</div>
</form>
  
    <div className="image-grid">
    {imageList.map((image) => (
      <div className='container space-x-3'>
      <img className="rounded-md" src={image.url} alt={image.publid_id}></img>
      </div>
    ))}
    </div>
    <div className='footer'>
      {
        nextCursor && (

<div class="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">

  <button class="bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded" onClick={handleLoadMore}>Load More</button>
</div>

        )
      }

    </div>
    </>
  );
}

export default App;
