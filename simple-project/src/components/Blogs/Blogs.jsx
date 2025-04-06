import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleBookMark, handleVisit}) => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch("blogs.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    //console.log(blogs);

    return (
        <div className='p-2 '>
            <h1 className='text-3xl'>Total : {blogs.length} </h1>

            <div className='grid grid-cols-2 gap-2 mt-3'>
                {
                    blogs.map(blog => <Blog 
                        key={blog.id} 
                        blog={blog}
                        handleBookMark={handleBookMark}
                        handleVisit={handleVisit}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;