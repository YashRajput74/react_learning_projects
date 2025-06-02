import { useEffect, useState } from "react";

export default function QuestionSeven() {
    const [users, setUsers] = useState([]);
    const [shouldFetch, setShouldFetch] = useState(false);
    function handleClick() {
        setShouldFetch(!shouldFetch);
    }
    useEffect(() => {
        if (shouldFetch) {
            fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'GET'
            })
                .then(res => res.json())
                .then(data => setUsers(data))
                .catch(err => console.error("Error:", err));
        }
    })
    return (
        <>
            <button onClick={handleClick}>Load Data</button>
            <div>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </div>
        </>
    )
}