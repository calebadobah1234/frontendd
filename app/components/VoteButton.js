"use client";
import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const VoteButton = (props) => {
  const voteRemaining = localStorage.getItem("userVoteRemaining");
  const router = useRouter();
  const addVote = async (id) => {
    await axios.post(`http://localhost:5000/add-vote/${id}`);
  };

  const decVotesLeft = async (id) => {
    const _id = localStorage.getItem("userId");

    if (voteRemaining > 0 || voteRemaining < 0) {
      await axios.post(`http://localhost:5000/auth/dec/${_id}`);
      localStorage.removeItem(voteRemaining);
      localStorage.setItem("userVoteRemaining", 0);
      router.refresh();
    } else {
      console.log("max votes exceeded");
      router.refresh();
    }
  };

  return (
    <div>
      {voteRemaining > 0 ? (
        <button
          className="bg-blue-500 p-4 text-white rounded-lg"
          onClick={() => {
            addVote(props.itemID);
            decVotesLeft(props.itemID);
          }}
        >
          Submit Vote
        </button>
      ) : (
        <div>
          <button className="bg-blue-500 p-4 text-white rounded-lg" disabled>
            No Votes Left
          </button>
        </div>
      )}
    </div>
  );
};

export default VoteButton;
