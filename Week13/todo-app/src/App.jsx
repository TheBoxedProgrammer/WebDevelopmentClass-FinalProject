import { useState } from "react"; // Import useState hook from React
 
function App() {
  // State to store the current input text
  const [task, setTask] = useState("");
 
  // State to store all to-do items in an array
  const [todos, setTodos] = useState([]);

  // state to store which task is being edited by Id
  const [editingId, setEditingId] = useState(null);

  //state to store the text while editing
  const [editText, setEditText] = useState("");
 
  // Function to add a new task
  const addTask = () => {
    // Prevent adding empty tasks
    if (task.trim() === "") return;
 
    // Create a new task object
    const newTodo = {
      id: Date.now(), // Unique id based on current time
      text: task, // Task text entered by user
      completed: false, // Task starts as not completed
    };
 
    // Add the new task to the existing todos array
    setTodos([...todos, newTodo]);
 
    // Clear the input box after adding
    setTask("");
  };

  // Function to start editing a task
  const startEdit = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  // Function to save the edited task
  const saveEdit = (id) => {
    if (editText.trim() === "") return;
    setTodos(
      todos.map((todo) => 
        todo.id === id ? {...todo, text: editText } : todo )
    );

    setEditingId(null);
    setEditText("");
  };
 
  // Function to delete a task by id
  const deleteTask = (id) => {
    // Keep all tasks except the one that matches the id
    setTodos(todos.filter((todo) => todo.id !== id));
  };
 
  // Function to mark a task as completed or incomplete
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        // If ids match, update that task's completed value
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo // Otherwise return the task unchanged
      )
    );
  };
 
  return (
    <div>
      <h1>React To-Do App</h1>
 
      {/* Input box for typing a task */}
      <input
        type="text"
        placeholder="Enter a task"
        value={task} // Current value comes from state
        onChange={(e) => setTask(e.target.value)} // Update state when user types
      />
 
      {/* Button to add a new task */}
      <button onClick={addTask}>Add</button>
 
      {/* List of all tasks */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editingId === todo.id ? (
              // Edit mode: Show input and save button
              <>
               <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button onClick={() => saveEdit(todo.id)}>Save</button>
              </>
            ): (
              <>
            {/* Click task text to toggle completed status */}
            <span onClick={() => toggleComplete(todo.id)}>
              {todo.completed ? "✔ " : ""}
              {todo.text}
            </span>

            {/* Button to edit the selected task */}
            <button onClick={() => startEdit(todo)}>Edit</button>

            {/* Button to delete the selected task */}
            <button onClick={() => deleteTask(todo.id)}>Delete</button>
            </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
 
export default App; // Export App component