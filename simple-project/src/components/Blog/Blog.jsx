import React from 'react';
import { FaBookmark } from "react-icons/fa";


const Blog = ({blog,handleBookMark, handleVisit}) => {
    //console.log(blog);
    //console.log(handleBookMark);

    return (
      <div>
        <div className="card bg-base-100 shadow-sm">
          <figure>
            <img src={blog.coverPhoto} />
          </figure>
          <div className="card-body">
            <div className="flex justify-between items-center">
              <h2 className="card-title">{blog.name}</h2>
              <FaBookmark onClick={() => handleBookMark(blog)} size={20} />
            </div>

            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <button onClick={() => handleVisit(blog.readingTime, blog.id)} className="btn btn-primary">
                Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Blog;