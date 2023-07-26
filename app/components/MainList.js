import React from "react";
import Image from "next/image";
import VoteButton from "./VoteButton";

const MainList = async () => {
  const res = await fetch("http://localhost:5000/get-20-items", {
    next: {
      revalidate: 0,
    },
  });

  const data = await res.json();

  return (
    <div className="mainContainer flex justify-center">
      <div className="">
        {data.map((item, index) => {
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
                className="mr-10 rounded-2xl"
                alt={item.name}
              ></Image>
              <div className="ml-5 flex items-center">
                <VoteButton itemID={item._id} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainList;
