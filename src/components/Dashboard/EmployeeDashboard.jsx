import React from "react";
import Header from "../others/Header";
import TaskListNumber from "../others/TaskListNumber";
import TaskList from "../Tasklist/TAskList";

const EmployeeDsahboard = ({data}) => {
  console.log(data);
  return (    
    <div className="p-10 bg-[#121212] h-screen w-screen">
      <Header data={data} />
      <TaskListNumber data={data} />
      <TaskList data={data} /> 
    </div>
  );
};

export default EmployeeDsahboard;
