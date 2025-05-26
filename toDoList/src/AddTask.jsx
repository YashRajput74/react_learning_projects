import { useContext, useState } from "react"
import { TasksContext } from "./Context";
let nextId=5;

export default function AddTask(){
    const {dispatch}=useContext(TasksContext);
    const [text,setText]=useState('');
    return (
        <>
            <input type="text" value={text} onChange={e=>setText(e.target.value)}/>
            <button onClick={()=>{
                setText('');
                dispatch({
                    type:'added',
                    id:nextId++,
                    text:text
                })
            }
            }>Add</button>
        </>

    )
}