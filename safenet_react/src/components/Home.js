import React from "react";
import Nav from "./Nav";
import Blog from "./Blog";
import About from "./About";
function Home() {
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

        {/* Individual card */}
        <Blog
          name="Ashmi"
          username="ashmi"
          date="10th Dec"
          year="2023"
          location="Hostel Avenue"
          information={`
                Workshops, seminars, and online platforms serve as effective mediums to impart this crucial information, enabling women to navigate through potentially risky situations with confidence.Additionally, community engagement is key. Creating a supportive network where individuals look out for each other fosters asafer environment. Establishing neighborhood watch programs orutilizing technology for quick communication during emergenciesstrengthens the communal fabric, enhancing overall safety.Technology itself offers innovative solutions.What drives us? Our dedication to creating tangible change fuels our efforts. Whether it's advocating for women's safety, raising awareness about mental health, promoting environmental consciousness, or addressing societal inequalities, we strive to spark conversations and drive meaningful action. What do we offer? Through informative articles, engaging discussions, educational resources, and collaborative initiatives, we aim to empower individuals to become agents of change in their communities. Our platform serves as a catalyst for knowledge-sharing, fostering a culture of awareness and proactive engagement. Join us on this journey towards a more informed, empathetic, and empowered society. Together, let's ignite conversations, amplify voices, and drive positive change. Thank you for being a part of our movement to create a brighter, more aware future.`}
          likeCount="123K"
        />

        <Blog
          name="Ashmi"
          username="ashmi"
          date="10th Dec"
          year="2023"
          location="Hostel Avenue"
          information={`
        Workshops, seminars, and online platforms serve as effective
                mediums to impart this crucial information, enabling women to
                navigate through potentially risky situations with confidence.
                Additionally, community engagement is key. Creating a supportive
                network where individuals look out for each other fosters a
                safer environment. Establishing neighborhood watch programs or
                utilizing technology for quick communication during emergencies
                strengthens the communal fabric, enhancing overall safety.
                Technology itself offers innovative solutions.`}
          likeCount="123K"
        />
        <Blog
          name="Ashmi"
          username="ashmi"
          date="10th Dec"
          year="2023"
          location="Hostel Avenue"
          information={`
        Workshops, seminars, and online platforms serve as effective
                mediums to impart this crucial information, enabling women to
                navigate through potentially risky situations with confidence.
                Additionally, community engagement is key. Creating a supportive
                network where individuals look out for each other fosters a
                safer environment. Establishing neighborhood watch programs or
                utilizing technology for quick communication during emergencies
                strengthens the communal fabric, enhancing overall safety.
                Technology itself offers innovative solutions.`}
          likeCount="123K"
        />
        <Blog
          name="Ashmi"
          username="ashmi"
          date="10th Dec"
          year="2023"
          location="Hostel Avenue"
          information={`
        Workshops, seminars, and online platforms serve as effective
                mediums to impart this crucial information, enabling women to
                navigate through potentially risky situations with confidence.
                Additionally, community engagement is key. Creating a supportive
                network where individuals look out for each other fosters a
                safer environment. Establishing neighborhood watch programs or
                utilizing technology for quick communication during emergencies
                strengthens the communal fabric, enhancing overall safety.
                Technology itself offers innovative solutions.`}
          likeCount="123K"
        />
      </div>
    </main>
  );
}

export default Home;
