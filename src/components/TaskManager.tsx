import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";

// New Task type with more fields
export type Task = {
  text: string;
  done: boolean;
  type: string;
  details: string;
  startDate: string;
  endDate: string;
};

const initialTasks: Task[] = [
  { text: "Finish 5 LeetCode questions this week", done: true, type: "Coding", details: "LeetCode practice", startDate: "2024-06-01", endDate: "2024-06-07" },
  { text: "Update LinkedIn profile", done: true, type: "Career", details: "Polish summary and add new skills", startDate: "2024-06-02", endDate: "2024-06-02" },
  { text: "Apply to 3 new jobs", done: false, type: "Job Search", details: "Send applications to 3 companies", startDate: "2024-06-03", endDate: "2024-06-05" },
  { text: "Attend a community group session", done: false, type: "Community", details: "Join ReactJS group call", startDate: "2024-06-06", endDate: "2024-06-06" },
];

// AddTaskForm component
const AddTaskForm = ({ onAdd, onEdit, editingTask, onCancelEdit }: { onAdd: (task: Task) => void, onEdit?: (task: Task) => void, editingTask?: { task: Task, idx: number } | null, onCancelEdit?: () => void }) => {
  const [form, setForm] = useState({
    text: editingTask ? editingTask.task.text : "",
    type: editingTask ? editingTask.task.type : "Coding",
    details: editingTask ? editingTask.task.details : "",
    startDate: editingTask ? editingTask.task.startDate : "",
    endDate: editingTask ? editingTask.task.endDate : "",
  });

  React.useEffect(() => {
    if (editingTask) {
      setForm({
        text: editingTask.task.text,
        type: editingTask.task.type,
        details: editingTask.task.details,
        startDate: editingTask.task.startDate,
        endDate: editingTask.task.endDate,
      });
    } else {
      setForm({ text: "", type: "Coding", details: "", startDate: "", endDate: "" });
    }
  }, [editingTask]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.text.trim()) {
      if (editingTask && onEdit) {
        onEdit({ ...form, done: editingTask.task.done });
      } else {
        onAdd({ ...form, done: false });
      }
      setForm({ text: "", type: "Coding", details: "", startDate: "", endDate: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 bg-white rounded-xl shadow-soft p-4 mb-6 border border-border">
      <div className="flex gap-2">
        <input
          className="flex-1 border rounded-lg p-2"
          type="text"
          name="text"
          placeholder="Task title..."
          value={form.text}
          onChange={handleChange}
          required
        />
        <select
          className="border rounded-lg p-2"
          name="type"
          value={form.type}
          onChange={handleChange}
        >
          <option value="Coding">Coding</option>
          <option value="Career">Career</option>
          <option value="Job Search">Job Search</option>
          <option value="Community">Community</option>
          <option value="Learning">Learning</option>
        </select>
      </div>
      <textarea
        className="w-full border rounded-lg p-2"
        name="details"
        placeholder="Details (optional)"
        rows={2}
        value={form.details}
        onChange={handleChange}
      />
      <div className="flex gap-2">
        <input
          className="border rounded-lg p-2 w-full"
          type="date"
          name="startDate"
          value={form.startDate}
          onChange={handleChange}
        />
        <input
          className="border rounded-lg p-2 w-full"
          type="date"
          name="endDate"
          value={form.endDate}
          onChange={handleChange}
        />
      </div>
      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-1 hover:bg-green-600 transition w-full justify-center"
          aria-label={editingTask ? "Edit Task" : "Add Task"}
        >
          <FaPlus />
          {editingTask ? "Save" : "Add"}
        </button>
        {editingTask && onCancelEdit && (
          <button
            type="button"
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg w-full justify-center"
            onClick={onCancelEdit}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

const TaskManager = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [editingTask, setEditingTask] = useState<{ task: Task; idx: number } | null>(null);

  const handleAddTask = (task: Task) => {
    setTasks([task, ...tasks]);
  };

  const handleEditTask = (task: Task) => {
    if (editingTask) {
      setTasks(tasks =>
        tasks.map((t, i) => (i === editingTask.idx ? { ...task } : t))
      );
      setEditingTask(null);
    }
  };

  const toggleTask = (idx: number) => {
    setTasks(tasks =>
      tasks.map((task, i) =>
        i === idx ? { ...task, done: !task.done } : task
      )
    );
  };

  const handleStartEdit = (task: Task, idx: number) => {
    setEditingTask({ task, idx });
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
  };

  return (
    <motion.div
      className="max-w-xl mx-auto py-12 px-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-green-700">Personal Tasks & Goals</h2>
      <AddTaskForm onAdd={handleAddTask} onEdit={handleEditTask} editingTask={editingTask} onCancelEdit={handleCancelEdit} />
      <ul className="space-y-2">
        {tasks.map((task, idx) => (
          <li
            key={idx}
            className="flex flex-col gap-1 cursor-pointer bg-white rounded-xl p-4 border border-border shadow-soft hover:shadow-medium transition group"
            onClick={() => toggleTask(idx)}
          >
            <div className="flex items-center gap-2">
              <span className={`text-xl select-none ${task.done ? "text-green-500" : "text-gray-400"}`}>
                {task.done ? "✅" : "⬜️"}
              </span>
              <span className={task.done ? "line-through text-gray-400 font-semibold" : "font-semibold"}>
                {task.text}
              </span>
              <span className="ml-auto text-xs px-2 py-1 rounded bg-muted text-muted-foreground border border-border">{task.type}</span>
              <button
                type="button"
                className="ml-2 text-xs text-blue-600 underline opacity-0 group-hover:opacity-100 transition"
                onClick={e => { e.stopPropagation(); handleStartEdit(task, idx); }}
              >
                Edit
              </button>
            </div>
            {task.details && <div className="text-sm text-gray-500 pl-7">{task.details}</div>}
            <div className="flex gap-2 text-xs text-gray-400 pl-7">
              {task.startDate && <span>Start: {task.startDate}</span>}
              {task.endDate && <span>End: {task.endDate}</span>}
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default TaskManager;