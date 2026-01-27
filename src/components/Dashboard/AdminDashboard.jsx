import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../Tasklist/AllTask";

const AdminDashboard = ({data}) => {
  return (
    <div className="p-10 h-screen w-screen text-white bg-[#121212]">
      <Header data={data} />
      <CreateTask data={data} />
      <AllTask data={data} />
    </div>
  );
};

export default AdminDashboard;
