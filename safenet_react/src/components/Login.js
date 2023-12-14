import React, { useState } from "react";
import { Input, Button, Image } from "@nextui-org/react";
import { redirect } from "react-router-dom";
/*
1. Fix the Design
2. use state hooks
3. Fix send in login.js server, if all goes right then return the name, username of logged in user as a json
4. create a function fetch("/login") ->  things go right then go to / else alert the message
*/
function Login({ _name, _username, _setName, _setUsername }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitBtn = async (e) => {
    // prevent submit on click
    e.preventDefault();
    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    // fetching
    const response = await fetch("http://localhost:3001/login", {
      method: "POST",
      body: formData,
    });

    // This is a promise .then -> promise has completed, .catch -> promise failed
    response
      .json() //read the response as a json
      .then((data) => {
        // If all goes right we get status as 200
        if (data.status == 200) {
          _setName(data.name);
          _setUsername(data.username);
          redirect("/");
        }
        // If all does not go right we refresh the page
      })
      .catch((err) => {
        // Something went wrong when fetching
        console.log(err.message);
      });
  };

  return (
    <div className="bg-zinc-800 w-screen h-screen flex items-center justify-center font-[Poppins]">
      <div className="bg-purple-400 w-[95%] lg:w-[45%] shadow-md rounded-xl flex overflow-hidden flex-col lg:flex-row mx-auto">
        <div className="flex-1 flex  flex-col justify-center items-start px-5 py-10">
          <h1 className="font-extrabold text-4xl text-white">
            WELCOME TO SAFENET
          </h1>
          <p className="mt-5 text-gray-700 text-sm">
            Here, your voice is heard, valued, and respected. This is a space
            free of judgment, a sanctuary where you can share your experiences
            of harassment, knowing that you are among empathetic and supportive
            individuals. Your courage in speaking out is honored, and together,
            we aim to create a community that uplifts and empowers. Welcome to a
            place where your story matters.
          </p>
          <Button className="mt-5 bg-white font-bold">Register</Button>
        </div>
        <div className="flex-1 bg-zinc-900 flex justify-center items-center flex-col gap-5 px-4 py-10">
          <h2 className="text-white font-bold text-2xl">Login</h2>
          <Input
            isClearable
            type="text"
            label="username"
            variant="bordered"
            placeholder="Enter your username"
            className="max-w-xs text-white focus:border-slate-100"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />

          <Input
            isClearable
            type="password"
            label="password"
            variant="bordered"
            placeholder="Enter your password"
            onClear={() => console.log("input cleared")}
            className="max-w-xs text-white focus:border-slate-100"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button
            onClick={(e) => {
              handleSubmitBtn(e);
            }}
            color="primary"
            href=""
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
