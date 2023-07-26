"use client";
import Image from "next/image";
import MainList from "../components/MainList";
import UserDetails from "../components/UserDetails";
import Navbar from "../components/Navbar";
import { useRouter } from "next/navigation";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <UserDetails />
        <MainList />
      </div>
    </>
  );
}
