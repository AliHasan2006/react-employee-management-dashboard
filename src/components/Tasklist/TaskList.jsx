import React from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({data}) => {
  return (
    <div
      id="taskList"
      className="h-[55%] overflow-auto flex items-center justify-start gap-5 py-2 mt-10"
    >
    {data.tasks.map((elem,idx)=>{
    if(elem.active){
      return <AcceptTask key={idx}/>
    }
    if(elem.newTask){
      return <NewTask key={idx}/>
    }
    if(elem.completed){
      return <CompleteTask key={idx}/>
    }
    if(elem.failed){
      return <FailedTask key={idx}/>
    }
    
    })}
    </div>
  );
};

export default TaskList;
