import QuestionOne from "./QuestionOne";
import QuestionTwo from "./QuestionTwo";

export default function App() {
    return (
        <>
            <div>
                <p>1. Log a message when the component mounts
                    - Create a functional component and use the useEffect hook to log a message like "Component mounted" in the console. Make sure the effect runs only once using an empty dependency array.</p>
                <QuestionOne />
            </div>
            <div>
                <p>
                    2. Run effect when a button is clicked (e.g., log a message when count changes)
                    - Create a counter using useState. Each time you click a button to increase the counter, use useEffect to log the updated count to the console. Add 'count' to the dependency array.
                </p>
                <QuestionTwo />
            </div>
            <div>
                <p>
                    3. Set the document title based on state (like count or input)
                    - Create a simple counter or input field, and use useEffect to update the page’s tab title using document.title whenever the state changes.
                </p>
                <QuestionThree />
            </div>
        </>

    )
}