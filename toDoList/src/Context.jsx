import { createContext } from "react"

const initialTasks = [
    { id: 1, text: 'Go on a Trip', done: false},
    { id: 1, text: 'Complete a Project', done: true},
    { id: 1, text: 'Learn React', done: false},
    { id: 1, text: 'Attend a meeting', done: false},
]

export default function TaskProvider() {
    const TasksContext = createContext(initialTasks);
    return
}