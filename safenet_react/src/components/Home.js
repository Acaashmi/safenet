import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Blog from "./Blog";
import About from "./About";
import BlogContainer from "./BlogContainer";
function Home() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const f = async () => {
      try {
        await fetch("http://localhost:3001/postDisplay")
          .then((res) => res.json())
          .then(({ data, status }) => {
            setPosts(data);
          });
      } catch (err) {
        console.error("Error");
      }
    };
    f();
  }, []);

  return (
    <main className="bg-[#090919] font-[Poppins]">
      <Nav />
      {/* Hero Section starts */}
      <div className="w-full max-w-6xl bg-[#090919] flex h-[500px] mx-auto items-center">
        <div className="flex-1">
          <h1 className="text-white font-bold text-7xl">SAFENET</h1>
          <p className="text-zinc-100 font-bold text-3xl mt-2">
            Creating a Safer Network
          </p>
          <p className="text-zinc-500 mt-10 text-md">
            We're Safenet, dedicated to fostering awareness and driving
            impactful change. Join us in our mission to inform, empower, and
            create a safer, more informed world for all.
          </p>
        </div>
        <img src="/images/Group 2.png" className="ml-5" />
      </div>
      {/* Hero Section Ends */}

      {/* About Section */}
      <About />

      {/* Posts Section Starts Here */}
      <div className="flex flex-col items-center justify-center font-[Poppins] gap-5 mt-5">
        {/* Header */}
        <h1 className="text-white font-bold text-3xl">Recent Posts</h1>
        <div>
          {posts.length === 0 ? (
            <p>Loading Posts.....</p>
          ) : (
            posts.map((post, index) => (
              <>
                {console.log(post)}
                <Blog
                  name="Ashmi"
                  username="ashmi"
                  date="10th Dec"
                  year="2023"
                  location={post.location}
                  information={post.content}
                  likeCount="123K"
                />
              </>
            ))
          )}
        </div>
      </div>
    </main>
  );
}

export default Home;
