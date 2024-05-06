import React from "react";
import { Card, CardBody, Image, Button, Slider ,Link} from "@nextui-org/react";

function About() {
  return (
    <div className="my-8 bg-black bg-opacity-70 backdrop-blur-lg py-8">
      <div className="w-full max-w-6xl mx-auto flex items-center gap-6">
        <Image src="/images/hero2.jpg" />

        <div className="flex flex-1 flex-col gap-10">
          <h1 className="text-zinc-200 font-bold text-5xl">
            Your Voice Matters: Share Your Story of Resilience
          </h1>
          <p className="text-zinc-400">
            Have you experienced harassment and found the strength to overcome
            it? Your story is a beacon of hope and empowerment. Join our
            community and share your experience. Your voice can inspire,
            educate, and support others on their journey to healing. Together,
            let's break the silence and stand in solidarity against harassment.
            Your story can spark change and encourage others to speak up. Share
            your story today."
          </p>
          <div className="flex flex-row gap-5">
          <Button className="mt-5 bg-white font-bold"
          as={Link}
          href="/postUpload">Start Sharing</Button>
          <Button className="mt-5 bg-white font-bold">Start Reading</Button>
          </div>
          
        </div>
        

      </div>
    </div>
  );
}

export default About;
