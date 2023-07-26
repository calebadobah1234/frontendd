"use client";
import React from "react";
import { useRouter } from "next/navigation";

const UserDetails = () => {
  const name = localStorage.getItem("userName");
  const voteRemaining = localStorage.getItem("userVoteRemaining");
  const router = useRouter();
  const email = localStorage.getItem("userEmail");
  if (email) {
    return (
      <div className="ml-10 ">
        <div className="border-solid border-2 border-blue-300 rounded-md mt-20 mr-5 pr-3 py-48">
          <div className="mb-2 ml-2">
            <span className="font-bold text-lg">Name: </span>
            {name}
          </div>
          <div className="mb-2 ml-2">
            <span className="font-bold text-lg">Email: </span>
            {email}
          </div>
          <div className="mb-2 ml-2">
            <span className="font-bold text-lg">Votes Remaining:</span>{" "}
            {voteRemaining >= 0 ? voteRemaining : 0}
          </div>
        </div>
      </div>
    );
  } else {
    router.push("/");
  }
};

export default UserDetails;
