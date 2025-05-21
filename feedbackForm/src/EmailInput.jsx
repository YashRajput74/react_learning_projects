export default function EmailInput({emailValue,emailFunction}){
    return (
        <input type="email" placeholder="abc@gmail.com" value={emailValue} onChange={emailFunction}/>
    )
}