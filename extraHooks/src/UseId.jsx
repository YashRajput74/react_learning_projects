import { useId } from 'react';

export function UseId() {
    // Generate a unique, stable ID for this component
    const id = useId();

    return (
        <div>
            {/* Link the label and input using the generated ID */}
            <label htmlFor={id}>Your Name: </label>
            <input id={id} type="text" name="name" />
        </div>
    );
}


/* 
UseId:  -It's a hook that creates a unique identifier (ID) that you can use in your JSX.
        -Sometimes, we need a unique ID to link HTML elements together. For example: when using <label> with <input>, you use an id and htmlFor to connect them. React needs to make sure those IDs don’t clash or change during re-renders.
        -Usually in forms or components where label/input, ARIA attributes, or any DOM ID is needed.
        -Use it whenever you need a unique and stable ID, especially in components that may render multiple times or in multiple places (like in a list).
Q1: What’s the advantage of using useId instead of just hardcoding an ID?
Short answer: To avoid ID conflicts and ensure stability especially in reusable components.

| 🛠 Manual IDs (`id="my-input"`)                               | ✅ `useId()`                                              |
| ------------------------------------------------------------- | -------------------------------------------------------- |
| You have to manually ensure uniqueness.                       | Auto-generates unique ID per component instance.         |
| Easy to make mistakes if used in loops or multiple instances. | Safe in multiple instances (no ID clashes).              |
| IDs can accidentally be duplicated.                           | Always stable and unique.                                |
| Hard to maintain in large apps or reusable components.        | Perfect for reusable or dynamically rendered components. |

*/