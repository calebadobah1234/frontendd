"use client";
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
const Page = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const emailFunction = (e) => {
    setEmail(e.target.value);
  };
  const passwordFunction = (e) => {
    setPassword(e.target.value);
  };
  const nameFunction = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/auth/register", {
        email: email,
        password: password,
        name: name,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.alreadyExist == false && res.data.logged == true) {
          router.push("/");
        } else if (res.data.alreadyExist == true) {
          alert("user already exists");
        }
      });
  };
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center my-40">
        <form
          action="http://localhost:5000/auth/login"
          method="post"
          class="bg-white p-8 shadow-md rounded-md w-96"
          onSubmit={handleSubmit}
        >
          <h2 class="text-2xl font-bold mb-6 text-center">Register</h2>
          <div class="mb-4">
            <label for="email" class="block font-medium mb-2">
              Name
            </label>
            <input
              type="string"
              id="name"
              name="name"
              placeholder="John Doe"
              class="w-full border border-gray-300 p-2 rounded-md"
              value={name}
              onChange={nameFunction}
            ></input>
          </div>
          <div class="mb-4">
            <label for="email" class="block font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              class="w-full border border-gray-300 p-2 rounded-md"
              value={email}
              onChange={emailFunction}
            ></input>
          </div>
          <div class="mb-4">
            <label for="password" class="block font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Your Password"
              class="w-full border border-gray-300 p-2 rounded-md"
              value={password}
              onChange={passwordFunction}
            ></input>
          </div>
          <div class="flex items-center mb-4">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              class="mr-2"
            ></input>
            <label for="rememberMe">Remember me</label>
          </div>
          <div class="flex items-center justify-between">
            <button
              type="submit"
              class="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
            >
              Register
            </button>
            <Link href="/login" class="text-blue-500 hover:text-blue-600">
              login
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Page;
