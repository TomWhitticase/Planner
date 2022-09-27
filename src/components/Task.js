import { FaExclamationCircle, FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.important ? "important" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <div className="flex justify-between">
        <h3 className="text-lg">
          {task.text}{" "}
          {task.important ? <FaExclamationCircle className="inline" /> : ""}{" "}
        </h3>
        <FaTimes
          className="bg-red-600 text-white  cursor-pointer"
          onClick={() => onDelete(task.id)}
        />
      </div>
      <p className="text-slate-400">{task.day}</p>
    </div>
  );
};

export default Task;
