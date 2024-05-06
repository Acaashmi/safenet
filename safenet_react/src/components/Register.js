import React, { useState, useEffect } from "react";
import { Input, Button, Link } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
// import bcrypt from "bcryptjs";

function Register({ _name, _username, _setName, _setUsername }) {
  // Various Hooks
  const [formName, setFormName] = useState("");
  const [formUsername, setFormUsername] = useState("");
  const [formPassword, setFormPassword] = useState("");
  const [formConfirmpassword, setFormConfirmpassword] = useState("");

  const navigate = useNavigate();

  // --------------------- Using this useState function for navigating to the home page---------------------
  useEffect(() => {
    if (!_username) return;
    return navigate("/");
  });

  // -------------------------- This is used to handle onclick of the submit button -----------------------------
  const handleSubmitBtn = async (e) => {
    // prevent submit on click
    e.preventDefault();

    // check
    if (formPassword !== formConfirmpassword) return;

    // append values to the form data....we will improve this
    let formData = new FormData();
    formData.append("name", formName);
    formData.append("username", formUsername);

    // const hashedPassword = await bcrypt.hash(formPassword, 10);
    formData.append("password", formPassword);

    // fetching
    const response = await fetch("http://localhost:3001/register", {
      method: "POST",
      body: formData,
    });

    // -------------------------- Get the response and if values are right then set global state -----------------------
    response
      .json()
      .then((data) => {
        if (data.status == 200) {
          _setName(data.name);
          _setUsername(data.username);
        } else window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // ------------------------------ JSX ---------------------------------------------------
  return (
    <div className="bg-zinc-900 w-screen min-h-screen flex items-center justify-center font-sans">
      <div className="w-[95%] max-w-xl lg:max-w-4xl shadow-md rounded-xl flex overflow-hidden flex-col lg:flex-row mx-auto">
        <div className="bg-purple-400 flex-1 flex flex-col justify-center items-start px-5 py-10 rounded-xl lg:rounded-none">
          <h1 className="font-extrabold text-2xl lg:text-4xl text-white">
            WELCOME TO SAFENET
          </h1>
          <p className="mt-4 text-gray-700 text-sm">
            Here, your voice is heard, valued, and respected. This is a space
            free of judgment, a sanctuary where you can share your experiences
            of harassment, knowing that you are among empathetic and supportive
            individuals. Your courage in speaking out is honored, and together,
            we aim to create a community that uplifts and empowers. Welcome to a
            place where your story matters.
          </p>
          <Button
            as={Link}
            className="mt-4 bg-white font-bold shadow-md rounded-full"
            href="/login"
          >
            Login
          </Button>
        </div>
        <div className="flex-1 bg-zinc-800 flex flex-col gap-4 px-4 py-10 items-center justify-center">
          <h2 className="text-white font-bold text-2xl lg:text-3xl text-center">
            JOIN US
          </h2>
          <Input
            type="text"
            label="Name"
            variant="bordered"
            size="sm"
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
              setFormName(e.target.value);
            }}
          />
          <Input
            type="text"
            label="Username"
            variant="bordered"
            size="sm"
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
              setFormUsername(e.target.value);
            }}
          />
          <Input
            type="password"
            label="Password"
            variant="bordered"
            size="sm"
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
              setFormPassword(e.target.value);
            }}
          />
          <Input
            type="password"
            label="Confirm Password"
            variant="bordered"
            size="sm"
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
              setFormConfirmpassword(e.target.value);
            }}
          />
          {formPassword != formConfirmpassword && (
            <p className="text-red-400 font-bold text-sm">
              * Password is not same as Confirm Password
            </p>
          )}
          <Button
            className="font-bold px-6 py-4 bg-purple-500 mx-4 shadow-md"
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
