import React from "react";

import AdminCode from "./AdminCode";
const AdminManager = async () => {
  const res = await fetch("https://etornam.onrender.com/get-20-items", {
    next: {
      revalidate: 0,
    },
  });
  const data = await res.json();
  return <AdminCode data={data} />;
};

export default AdminManager;
