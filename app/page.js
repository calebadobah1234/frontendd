"use client";
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "./components/Navbar";

const Page = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailFunction = (e) => {
    setEmail(e.target.value);
  };
  const passwordFunction = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("https://etornam.onrender.com/auth/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.logged == true) {
          localStorage.setItem("userEmail", res.data.user.email);
          localStorage.setItem("userName", res.data.user.name);
          localStorage.setItem(
            "userVoteRemaining",
            res.data.user.voteRemaining
          );
          localStorage.setItem("userId", res.data.user._id);
          router.push("/main");
        }
        if (res.data.doesNotExist && res.data.doesNotExist == true) {
          alert("account does not exist try registering");
        }
      });
  };
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center my-40">
        <form
          action="https://etornam.onrender.com/auth/login"
          method="post"
          class="bg-white p-8 shadow-md rounded-md w-96"
          onSubmit={handleSubmit}
        >
          <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
          <div class="mb-4">
            <label for="email" class="block font-medium mb-2 ">
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
              Login
            </button>
            <Link href="/register" class="text-blue-500 hover:text-blue-600">
              Register
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Page;
