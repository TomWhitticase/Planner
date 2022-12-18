import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Button from "./components/Button";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Meeting with boss",
      date: "2022-12-15T15:00",
      important: true,
    },
    {
      id: 2,
      text: "Call parents",
      date: "2022-11-28T20:0",
      important: true,
    },
    {
      id: 3,
      text: "Opticians Appointment",
      date: "2022-12-15T10:15",
      important: false,
    },
  ]);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;

    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleImportant = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, important: !task.important } : task
      )
    );
  };

  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="flex flex-col justify-center align-middle bg-gray-100  rounded-lg shadow-lg p-4">
        <Button
          color={showAddTask ? "red" : "green"}
          text={showAddTask ? "Close" : "Add Meeting"}
          onClick={() => setShowAddTask(!showAddTask)}
        />

        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleImportant}
          />
        ) : (
          "No Tasks"
        )}
      </div>
    </div>
  );
}

export default App;
