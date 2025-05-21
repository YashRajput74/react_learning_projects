import EmailInput from "./EmailInput";
import NameInput from "./NameInput";

export default function UserInfo({nameValue,emailValue,nameFunction,emailFunction}){
    return (
        <div className="userInfo">
            <NameInput nameValue={nameValue} nameFunction={nameFunction}/>
            <EmailInput emailValue={emailValue} emailFunction={emailFunction}/>
        </div>
    )
}