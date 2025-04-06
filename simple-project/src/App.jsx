import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar></Navbar>

      <div className="flex gap-2 m-1">
        {/* left side */}
        <div className="w-3/4 border-2 rounded">
          
          <Blogs></Blogs>
        </div>

        {/* right side */}
        <div className="w-1/4 border-2 rounded">
          <h2>Reading time: 0</h2>
          <h2>Bookmark count: 0</h2>
        </div>
      </div>
    </>
  );
}

export default App
