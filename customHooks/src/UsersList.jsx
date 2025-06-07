import { useMemo } from "react";

const UsersList = ({ users }) => {
    const sortedUsers = useMemo(() => {
        console.log('Sorting users...');
        return [...users].sort((a, b) => a.name.localeCompare(b.name));
    }, [users]); // 🔁 Only re-run if users change

    return (
        <ul>
            {sortedUsers.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
};
export default UsersList;

/* react.memo: when a component is rerendered the children also get rerendered so we cover the children component in memo so that it doesn't get rerendered.
react.callback-function...when we use react.memo the immutable strings as prop do not rerender the component but the same prop that is a function will always rerender the component so we use react.callback...
useMemo-when we do a calculation over some things...if the things do not change the calculation will not change that is why we add the "things" in the dependency in useMemo */
/* 
React.memo
When a component re-renders, its child components also re-render by default. To stop a child component from re-rendering if its props haven’t changed, we can wrap it in React.memo(). This helps in improving performance.
*/
/* 
useCallback
When using React.memo, normal values (like numbers or strings) as props don’t cause re-renders if they haven’t changed. But functions are always seen as “new” every time the parent renders. So we use useCallback to memoize the function—this means React will remember the same function if its dependencies haven’t changed, which helps avoid unnecessary re-renders.
*/
/* 
useMemo
When we do a heavy calculation based on some data, we don’t want to repeat the calculation if the data hasn't changed. So we use useMemo to remember (or "memoize") the result. It will only re-calculate if the values in the dependency array change.
*/