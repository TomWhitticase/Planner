import { FaExclamationCircle, FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`p-4 rounded-lg shadow-lg ${
        task.important ? "text-red-500" : ""
      }`}
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
      <p className="text-slate-400">{getDisplayDate(task.date)}</p>
    </div>
  );
};

function getDisplayDate(dateTime) {
  const date = dateTime.split("T")[0];
  const time = dateTime.split("T")[1];

  const splitDate = date.split("-");
  const date2 = splitDate[2] + "/" + splitDate[1] + "/" + splitDate[0];

  return date2 + " " + time;
}

export default Task;
