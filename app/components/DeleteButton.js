"use client";
import React from "react";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import { useRouter } from "next/navigation";

const DeleteButton = (props) => {
  const router = useRouter();
  const deleteFunction = async (id) => {
    await axios.post(`https://etornam.onrender.com/delete-candidate/${id}`);
  };
  const reloadFunction = () => {
    router.refresh();
  };
  return (
    <div
      onClick={() => {
        deleteFunction(props.id);
        reloadFunction();
      }}
    >
      <AiFillDelete />
    </div>
  );
};

export default DeleteButton;
