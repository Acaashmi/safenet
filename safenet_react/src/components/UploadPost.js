import React from "react";
import { Input, Card, CardBody, Button, Link } from "@nextui-org/react";
import { useState, useRef, useMemo ,useEffect} from "react";
import JoditEditor from "jodit-react";
import { useNavigate } from "react-router-dom";

export default function UploadPost() {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [title,setTitle]=useState("");
  const [date,setDate]=useState("");
  const [location,setLocation]=useState("");
  
  const navigate = useNavigate();


  const handleSubmitBtn = async (e) => {
    e.preventDefault();
    console.log(content,title,location,date);

    let formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);

   
    formData.append("location", location);
    formData.append("date", date);


    // fetching
    const response = await fetch("http://localhost:3001/postupload", {
      method: "POST",
      body: formData,
    });

    
  };
  return (
    <div className="bg-[#090919] font-[Poppins] min-h-screen">
      <div class=" content-center flex flex-col justify-center">
        <h2 class="mt-10 text-3xl font-bold tracking-tight text-white sm:text-4xl text-center ">
          SHARE YOUR STORY
        </h2>
        <p class="mt-2 text-lg leading-8 text-white text-center">
          Where Your Words Matters
        </p>
      </div>
      <Card className="m-10 rounded-none">
        <CardBody>
          <form>
            <div className="my-3">
              <lable for="title">POST TITLE</lable>
              <Input
                type="text"
                id="title"
                placeholder="Enter Your Title"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              ></Input>
            </div>
            <div className="my-3 flex flex-col">
              <label for="exampleFormControlTextarea1">POST CONTENT</label>
              {/* <textarea
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                id="exampleFormControlTextarea1"
                placeholder="Your message"
                required
              ></textarea> */}
              <JoditEditor
                ref={editor}
                value={content}
                onChange={(newContent) => setContent(newContent)}
              />
            </div>
            <div className="my-3">
              <lable for="content">ENTER THE LOCATION</lable>
              <Input
                type="text"
                id="content"
                placeholder="Start Typing"
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              ></Input>
            </div>
            <div className="my-3">
              <lable for="content">DATE OF THE INCIDENT</lable>
              <Input
                type="date"
                id="content"
                placeholder="Start Typing"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              ></Input>
            </div>
          </form>
          <div className="flex justify-end">
            <Button
              className="font-bold px-6 py-4 bg-purple-500 mx-4 shadow-md w-50"
              onClick={(e) => {
                handleSubmitBtn(e);
              }}
            >
              Post
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
