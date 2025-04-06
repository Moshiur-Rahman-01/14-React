import React from 'react';

const Blog = ({blog}) => {
    console.log(blog);
    //const {blog}
    return (
      <div>
        <div className="card bg-base-100 shadow-sm">
          <figure>
            <img
              src={blog.coverPhoto}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{blog.name}</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Visit</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Blog;