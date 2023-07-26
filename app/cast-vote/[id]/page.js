"use client";

import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";

const page = async ({ params }) => {
  const [notVoted, setNotVoted] = useState(true);
  const res = await fetch(`http://localhost:5000/get-item/${params.id}`, {
    next: { revalidate: 0 },
  });
  const data = await res.json();
  const addVote = async () => {
    await axios.post(`http://localhost:5000/add-vote/${params.id}`);
    setNotVoted(false);
  };
  return (
    <div className="flex justify-center mt-16">
      <div className="flex">
        <Image src={data.img} width={200} height={200} className="" />
        <div>
          <div className="ml-10">{data.name}</div>
          <div className="ml-10">{data.votes}</div>
          <button
            className={`bg-blue-500 p-8 ml-10 ${
              notVoted == true ? "inline" : "disabled"
            }`}
            onClick={addVote}
          >
            Cast Vote
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
