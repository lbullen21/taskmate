import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <TaskList name="Lauren" />
    </div>
  );
};
