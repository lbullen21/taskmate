import { useState } from "react";
import { TaskCard } from "./TaskCard";
import { BoxCard } from "./BoxCard";

export const TaskList = (props) => {
  const [tasks, setTasks] = useState([
    { id: 5271, name: "Record React Lectures", completed: true },
    { id: 7825, name: "Watch React Lectures", completed: false },
    { id: 3891, name: "Edit React Lectures", completed: true },
  ]);

  const [show, setShow] = useState(true);

  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="tasklist">
      <h1>Task List {props.name} </h1>
      <ul>
        <button onClick={() => setShow(!show)}>Toggle</button>
        {show &&
          tasks.map((task) => (
            <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
          ))}
      </ul>
      <BoxCard result="success">
        <p className="title">Lorem ipsum dolor</p>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris.
        </p>
      </BoxCard>
    </div>
  );
};
