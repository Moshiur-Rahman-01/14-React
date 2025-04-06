import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {

  const [bookmarked, setBookmarked] =useState([]);
  const [readingCount, setReadingCount] = useState(0);

  const handleBookMark = (blog) => {
    //console.log(blog);
    setBookmarked([...bookmarked,blog]);
  }

  const handleVisit = (time,id) => {
    //console.log(time,id);
    const newTime = readingCount + time;
    setReadingCount(newTime);
    handleRemoveFromBookmark(id);
  }

  const handleRemoveFromBookmark = (id) =>{
    const remainingBookMark = bookmarked.filter((mark) => mark.id !== id);
    //console.log(remainingBookMark);
    setBookmarked(remainingBookMark);
  }


  return (
    <>
      <Navbar></Navbar>

      <div className="flex gap-2 m-1 mt-3">
        {/* left side */}
        <div className="w-3/4">
          <Blogs
            handleBookMark={handleBookMark}
            handleVisit={handleVisit}
          ></Blogs>
        </div>

        {/* right side */}
        <div className="w-1/4">
          <h2>Reading time: {readingCount}</h2>
          <h2>Bookmark count: {bookmarked.length}</h2>
          {bookmarked.map((marked) => (
            <p className='bg-orange-500 text-2xl text-center shadow-2xl p-3 m-2 rounded-2xl text-white font-bold' key={marked.id}>{marked.authorName}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default App
