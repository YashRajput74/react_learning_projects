import QuestionSix from "./Question6to10/QuestionSix";
import QuestionFive from "./Questions1to5/QuestionFive";
import QuestionFour from "./Questions1to5/QuestionFour";
import QuestionOne from "./Questions1to5/QuestionOne";
import QuestionThree from "./Questions1to5/QuestionThree";
import QuestionTwo from "./Questions1to5/QuestionTwo";

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
            <div>
                <p>
                    4. Create a simple interval timer using setInterval and clear it on unmount
                    - Set up an interval inside useEffect that increases a number every second. Make sure to return a cleanup function that clears the interval when the component unmounts.
                </p>
                <QuestionFour />
            </div>
            <div>
                <p>
                    5. Track window resize and update the size in state
                    - Use useEffect to add an event listener for the window 'resize' event. Update the width and height in state whenever the window resizes. Don’t forget to remove the event listener in the cleanup function.
                </p>
                <QuestionFive />
            </div>
            <div>
                <p>
                    6. Fetch data from an API on component mount (e.g., users from JSONPlaceholder)
                    - Use useEffect to fetch data (like a list of users) from an API when the component first loads. Store the result in state and display it. Use the empty dependency array to run it only once.
                </p>
                <QuestionSix />
            </div>
        </>

    )
}