import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [date, setDay] = useState("");
  const [important, setImportant] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Pleade add a task");
      return;
    }

    onAdd({ text, date, important });

    setText("");
    setDay("");
    setImportant(false);
  };

  return (
    <form className="" onSubmit={onSubmit}>
      <div className="flex flex-col p-2">
        <label>Title</label>
        <input
          className=""
          type="text"
          placeholder="Add Title"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="flex flex-col p-2">
        <label>Date & Time</label>
        <input
          className=""
          type="datetime-local"
          placeholder="Add Date & Time"
          value={date}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="flex justify-start p-2 gap-2">
        <label>Mark as important</label>
        <input
          className="w-10"
          type="checkbox"
          checked={important}
          value={important}
          onChange={(e) => setImportant(e.currentTarget.checked)}
        />
      </div>

      <input className="" type="submit" value="Add" />
    </form>
  );
};

export default AddTask;
