"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const AdminForm = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [image, setImage] = useState("");
  const nameFunction = (e) => {
    setName(e.target.value);
  };
  const positionFunction = (e) => {
    setPosition(e.target.value);
  };
  const imageFunction = (e) => {
    setImage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/add-candidate", {
        name: name,
        position: position,
        img: image,
      })
      .then(() => {
        router.refresh();
      });
  };

  return (
    <div className="py-24 mt-10 mx-20">
      <form onSubmit={handleSubmit} method="post">
        <h1 className="flex justify-center font-bold text-2xl">
          Add Participants
        </h1>
        <div className="flex justify-center items-center ">
          <input
            onChange={nameFunction}
            name="name"
            value={name}
            placeholder="Name"
            className="w-full border border-blue-300 p-2 rounded-md bg-gray-200 mx-4 my-10"
          ></input>
          <input
            onChange={positionFunction}
            name="position"
            value={position}
            placeholder="position"
            className="w-full border border-blue-300 p-2 rounded-md bg-gray-200 mx-4 my-10"
          ></input>
          <input
            onChange={imageFunction}
            name="image"
            value={image}
            placeholder="image url"
            className="w-full border border-blue-300 p-2 rounded-md bg-gray-200 mx-4 my-10"
          ></input>
        </div>
        <div className="flex justify-center">
          {" "}
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 "
          >
            Add Candidate
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminForm;
