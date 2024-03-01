import "./AddTask.css";
import { useState } from "react";

export const AddTask = () => {
  const [taskValue, setTaskValue] = useState("");
  const handleAddTask = (event) => {
    console.log(event.target.value);
  };

  const handleReset = () => {
    setTaskValue("");
  };

  return (
    <section className="addtask">
      <form>
        <label htmlFor="">Task Name: </label>
        <input
          onChange={handleAddTask}
          type="text"
          name="task"
          id="task"
          placeholder="Task Name"
          autoComplete="off"
        />
        <button type="submit">Add Task</button>
        <button type="reset">Reset</button>
      </form>
    </section>
  );
};
