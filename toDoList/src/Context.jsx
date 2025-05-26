import { createContext, useReducer } from "react"

const initialTasks = [
    { id: 1, text: 'Go on a Trip', done: false},
    { id: 2, text: 'Complete a Project', done: true},
    { id: 3, text: 'Learn React', done: false},
    { id: 4, text: 'Attend a meeting', done: false},
]

export const TasksContext = createContext(initialTasks);
export default function TaskProvider({children}) {
    const [tasks,dispatch]=useReducer(
        tasksReducer,
        initialTasks
    )
    return (
        <TasksContext.Provider value={{tasks,dispatch}}>
            {children}
        </TasksContext.Provider>
    )
}


function tasksReducer(tasks,action){
    switch (action.type){
        case 'added': {
            return [...tasks,{
                id:action.id,
                text:action.text,
                done:false
            }]
        }
        case 'changed': {
            return tasks.map(t=>{
                if(t.id===action.task.id){
                    return action.task;
                }
                else{
                    return t;
                }
            })
        }
        case 'deleted': {
            return tasks.filter(t=>t.id!==action.id)
        }
        default: {
            throw Error('Unknown action: '+action.type);
        }
    }
}