import { useEffect, useState } from "react"

export default function QuestionSix() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(err => console.error("Error:", err));
    },[])

    return (
        <div>
            {users.map((user)=>(
                <li key={user.id}>{user.name}</li>
            ))}
        </div>
    )
}