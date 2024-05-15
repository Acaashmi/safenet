import React, { useState, useEffect } from 'react';
import Blog from "./Blog";

const BlogContainer = ({ location }) => {
  const [blogs, setBlogs] = useState([]);

  

  useEffect(() => {
    const f = async () => {
      try {
        await fetch(`http://localhost:3001/postDisplay?location=${location}`)
          .then((res) => res.json())
          .then(({ data, status }) => {
            setBlogs(data);
          });
      } catch (err) {
        console.error("Error");
      }
    };
    f();
  }, [location]);

  return (
    <div>
      <h2>Blogs in {location}</h2>
      <div>
          {blogs.length === 0 ? (
            <p>Loading Posts.....</p>
          ) : (
            blogs.map((blog, index) => (
              <>
                {console.log(blog)}
                
                <Blog
                  name="Ashmi"
                  username="ashmi"
                  date="10th Dec"
                  year="2023"
                  location={blog.location}
                  information={blog.content}
                  likeCount="123K"
                />
              </>
            ))
          )}
        </div>
    </div>
  );
};

export default BlogContainer;
