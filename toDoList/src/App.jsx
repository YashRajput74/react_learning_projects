import AddTask from "./AddTask";
import "./App.css";
import TaskProvider from "./Context";
import TaskList from "./TaskList";

export default function App() {
    return (
        <TaskProvider>
            <AddTask />
            <TaskList />
        </TaskProvider>
    )
}