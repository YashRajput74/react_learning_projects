import { useContext, useState } from "react";
import { TasksContext } from "./Context";
export default function TaskList(){
    const {tasks}=useContext(TasksContext);
    return (
        <ul>
            {
                tasks.map((task)=>{
                    return <li key={task.id}>
                        <Task task={task}/>
                    </li>
                })
            }
        </ul>
    )
}

function Task({task}){
    const [isEditing, setIsEditing] = useState(false);
    const {dispatch}=useContext(TasksContext);
    let taskContent;
    if (isEditing) {
        taskContent = (
            <>
                <input
                    value={task.text}
                    onChange={(e) => {
                        dispatch({
                            type:'changed',
                            task:{
                                ...task,
                                text:e.target.value
                            }
                        })
                    }}
                />
                <button onClick={() => setIsEditing(false)}>Save</button>
            </>
        );
    } else {
        taskContent = (
            <>
                {task.text}
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
        );
    }
    return (
        <label>
            <input
                type="checkbox"
                checked={task.done}
                onChange={(e) => {
                    dispatch({
                        type: 'changed',
                        task:{
                            ...task,
                            done:e.target.checked
                        }
                    })
                }}
            />
            {taskContent}
            <button onClick={() => dispatch({
                type:'deleted',
                id:task.id
            })}>Delete</button>
        </label>
    );
}