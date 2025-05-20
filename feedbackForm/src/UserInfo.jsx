import EmailInput from "./EmailInput";
import NameInput from "./NameInput";

export default function UserInfo(){
    return (
        <div className="userInfo">
            <NameInput />
            <EmailInput />
        </div>
    )
}