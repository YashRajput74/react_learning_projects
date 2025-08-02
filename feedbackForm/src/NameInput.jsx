import { useContext } from "react"
import { FormContext } from "./App";

export default function NameInput({nameValue,nameFunction}){
    const {name,nameChange}=useContext(FormContext)
    return (
        <input type="text" placeholder="Name" value={name} onChange={nameChange} className="name"/>
    )
}