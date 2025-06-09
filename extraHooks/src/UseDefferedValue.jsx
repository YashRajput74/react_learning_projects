export default function UseDefferedValue() {
    return <SearchComponent />
}

import { useState, useDeferredValue } from 'react';

function BigList({ items }) {
    // Simulate slow rendering with heavy mapping
    return (
        <ul>
            {items.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    );
}

function SearchComponent() {
    const [query, setQuery] = useState('');

    // Create a deferred version of the query
    const deferredQuery = useDeferredValue(query);

    // Simulated big dataset
    const data = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

    // Filter using the deferred query — this is delayed!
    const filtered = data.filter((item) =>
        item.toLowerCase().includes(deferredQuery.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <p>Input: {query}</p>
            <p>Deferred: {deferredQuery}</p>

            {/* BigList will re-render less frequently */}
            <BigList items={filtered} />
        </div>
    );
}
/* 
useDefferedValue:   -It defers updating a value until there’s time, preventing slow UI updates.
                    -You get a "laggy copy" of your value that updates later.
                    -To keep your UI responsive, especially during heavy rendering like:
                        Large search result lists
                        Complex filters
                        Animations or transitions
                    -In search inputs, filters, live updates, or typing UIs.
                    -Anywhere the user types, but you don’t want React to block fast input.
                    -When your app feels laggy or jumpy because of heavy re-renders after every keystroke.
                    -Perfect for "type now, see results a second later" behavior.
| Feature            | Description                           |
| ------------------ | ------------------------------------- |
| 📦 Hook            | `useDeferredValue(value)`             |
| 🧠 Purpose         | Smooth out UI when value changes      |
| 📍 Use Case        | Search, filters, slow renders         |
| 🚀 Benefit         | Input stays fast, rendering delays    |
| ❌ Don't use it for | Critical updates like form validation |



query changes immediately → deferredQuery updates later → filtering only runs when deferredQuery changes.
| Feature                           | `useDeferredValue`                     | `debounce()`                     |
| --------------------------------- | -------------------------------------- | -------------------------------- |
| Knows React's render priority     | ✅ Yes (react-aware)                    | ❌ No (generic timing only)       |
| Easy integration with state/hooks | ✅ Works seamlessly with `useState`     | ❌ You have to manage extra logic |
| Defers value **not** the event    | ✅ Defers the **render** based on value | ❌ Delays the **function call**   |
| Plays nice with React Suspense    | ✅ Yup                                  | ❌ Not integrated                 |
-useDeferredValue is like a smart debounce built into React’s brain.
It delays rendering until the system is ready, instead of you manually setting timers.
*/