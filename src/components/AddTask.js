export const AddTask = () => {
  return (
    <section className="addTask">
      <form>
        <input
          type="type"
          name="task"
          autoComplete="off"
          placeholder="add task"
        />
        <button type="submit">Add</button>
      </form>
    </section>
  );
};

// import "./AddTask.css";
// import { useState } from "react";

// export const AddTask = ({ tasks, setTasks }) => {
//   const [taskValue, setTaskValue] = useState("");
//   const [progress, setProgress] = useState(false);

//   const handleChange = (event) => {
//     setTaskValue(event.target.value);
//   };

//   const handleReset = () => {
//     setTaskValue("");
//     setProgress(false);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const task = {
//       id: Math.floor(Math.random() * 1000),
//       name: taskValue,
//       completed: Boolean(progress),
//     };
//     console.log(task);
//     setTasks([...tasks, task]);
//     handleReset();
//   };

//   return (
//     <section className="addtask">
//       <form onSubmit={handleSubmit}>
//         <input
//           onChange={handleChange}
//           type="text"
//           name="task"
//           id="task"
//           placeholder="Task Name"
//           autoComplete="off"
//           value={taskValue}
//         />
//         <select
//           onChange={(event) => setProgress(event.target.value)}
//           value={progress}
//         >
//           <option value={false}>Pending</option>
//           <option value={true}>Completed</option>
//         </select>
//         <button onClick={handleReset} type="reset">
//           Reset
//         </button>
//         <button type="submit">Add Task</button>
//       </form>
//     </section>
//   );
// };
