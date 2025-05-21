export default function NameInput({nameValue,nameFunction}){
    return (
        <input type="text" placeholder="Name" value={nameValue} onChange={nameFunction} className="name"/>
    )
}