import React, { useState, useEffect, useContext } from "react";
import Blog from "./Blog";
import { locationContext } from "./Location";

const BlogContainer = () => {
const [blogs, setBlogs] = useState([]);
const {location} = useContext(locationContext);
  
  useEffect(() => {
    const f = async () => {
      const url = `http://localhost:3001/postDisplay` + (location === '' ? '' : `?location=${location}`)
      try {
        await fetch(url)
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
      <h1 className="text-white font-bold text-3xl">{location ? `Blogs in ${location}`: `Recent Posts`}</h1>
      <div>
        {blogs.length === 0 ? (
          <p>Loading Posts.....</p>
        ) : (
          blogs.map((blog, index) => (
            <>
                
              <Blog
                name="Ashmi"
                username="ashmi"
                date="10th Dec"
                year="2023"
                location={blog.location}
                information={blog.content}
                likeCount="123K"
                key={index}
              />
            </>
          ))
        )}
      </div>
    </div>
  );
};

export default BlogContainer;
