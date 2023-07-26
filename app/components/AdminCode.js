"use client";
import React from "react";
import Image from "next/image";
import DeleteButton from "./DeleteButton";
import { useRouter } from "next/navigation";
const AdminCode = (props) => {
  const router = useRouter();
  const email = localStorage.getItem("userEmail");
  if (email == "") {
    router.push("/");
  } else if (email == "calebadobah4321@gmail.com") {
    return (
      <div className="mainContainer flex justify-center">
        <div className="">
          {props.data.map((item, index) => {
            return (
              <div
                className="flex my-5 border-solid border-4 rounded-lg border-blue-300 px-20 py-10"
                key={index}
              >
                <div className="flex items-center">{index + 1}</div>
                <div className="flex flex-col justify-center ml-10 font-bold text-md mr-8 w-60 ">
                  <div>{item.name}</div>
                  <div>({item.votes})</div>
                </div>
                <Image
                  src={item.img}
                  width={200}
                  height={200}
                  className="mr-10 rounded-lg"
                ></Image>
                <div className="flex items-center cursor-pointer">
                  <DeleteButton id={item._id} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    alert("you dont have access to this route");
    router.push("/main");
  }
};

export default AdminCode;
