import React, { useState } from "react";
import { Input, Button, Image } from "@nextui-org/react";
import { redirect } from "react-router-dom";

function Register({ _name, _username, _setName, _setUsername }) {
  // useState hooks
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const handleSubmitBtn = async (e) => {
    // prevent submit on click
    e.preventDefault();

    // check
    if (password !== confirmpassword) return;

    // append values to the form data....we will improve this
    let formData = new FormData();
    formData.append("name", name);
    formData.append("username", username);
    // hash the password and then send to db
    formData.append("password", password);

    // fetching
    const response = await fetch("http://localhost:3001/register", {
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
    <div className="bg-zinc-900 w-screen h-screen flex items-center justify-center font-[Poppins]">
      <div
        className="w-[95%] lg:w-[45%] shadow-md rounded-xl flex overflow-hidden flex-col lg:flex-row mx-auto"
        style={{ backgroundImage: "/images/hero2.jpg" }}
      >
        <div className="bg-purple-400 flex-1 flex  flex-col justify-center items-start px-5 py-10">
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
          <Button className="mt-5 bg-white font-bold">Login</Button>
        </div>
        <div className="flex-1 bg-zinc-800 flex flex-col gap-5 px-4 py-10">
          <h2 className="text-white font-bold text-3xl text-center">JOIN US</h2>
          <Input
            type="text"
            label="Name"
            variant="bordered"
            classNames={{
              inputWrapper: [
                "border-zinc-500",
                "data-[hover=true]:border-zinc-100",
                "group-data-[focus=true]:border-zinc-200",
              ],
              input: ["font-bold"],
            }}
            className="max-w-sm text-white focus:border-slate-100 font-bold"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Input
            type="text"
            label="Username"
            variant="bordered"
            classNames={{
              inputWrapper: [
                "border-zinc-500",
                "data-[hover=true]:border-zinc-100",
                "group-data-[focus=true]:border-zinc-200",
              ],
              input: ["font-bold"],
            }}
            className="max-w-sm text-white focus:border-slate-100 font-bold"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <Input
            type="password"
            label="password"
            variant="bordered"
            classNames={{
              inputWrapper: [
                "border-zinc-500",
                "data-[hover=true]:border-zinc-100",
                "group-data-[focus=true]:border-zinc-200",
              ],
              input: ["font-bold"],
            }}
            className="max-w-sm text-white focus:border-slate-100 font-bold"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Input
            type="password"
            label="Confirm Password"
            variant="bordered"
            classNames={{
              inputWrapper: [
                "border-zinc-500",
                "data-[hover=true]:border-zinc-100",
                "group-data-[focus=true]:border-zinc-200",
              ],
              input: ["font-bold"],
            }}
            className="max-w-sm text-white focus:border-slate-100 font-bold"
            onChange={(e) => {
              setConfirmpassword(e.target.value);
            }}
          />
          {password != confirmpassword && (
            <p className="text-red-400 font-bold text-sm">
              * Password is not same as Confirm Password
            </p>
          )}
          {/* this is how we write in react */}
          <Button
            className="font-bold px-6 py-4 bg-purple-500 mx-4"
            onClick={(e) => {
              handleSubmitBtn(e);
            }}
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Register;
