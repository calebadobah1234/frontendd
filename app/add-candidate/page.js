import React from "react";
import AdminManager from "../components/AdminManager";
import AdminForm from "../components/AdminForm";
import Navbar from "../components/Navbar";

const page = () => {
  return (
    <div className="border-blue-300">
      <Navbar />
      <AdminForm />
      <AdminManager />
    </div>
  );
};

export default page;
