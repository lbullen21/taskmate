import "./App.css";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import { Footer } from "./components/Footer";
import { AddTask } from "./components/AddTask";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <AddTask />
      <TaskList />
      <Footer />
    </div>
  );
};
