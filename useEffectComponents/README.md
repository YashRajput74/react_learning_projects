1. Log a message when the component mounts  
   - Create a functional component and use the useEffect hook to log a message like "Component mounted" in the console. Make sure the effect runs only once using an empty dependency array.

2. Run effect when a button is clicked (e.g., log a message when count changes)  
   - Create a counter using useState. Each time you click a button to increase the counter, use useEffect to log the updated count to the console. Add 'count' to the dependency array.

3. Set the document title based on state (like count or input)  
   - Create a simple counter or input field, and use useEffect to update the page’s tab title using document.title whenever the state changes.

4. Create a simple interval timer using setInterval and clear it on unmount  
   - Set up an interval inside useEffect that increases a number every second. Make sure to return a cleanup function that clears the interval when the component unmounts.

5. Track window resize and update the size in state  
   - Use useEffect to add an event listener for the window 'resize' event. Update the width and height in state whenever the window resizes. Don’t forget to remove the event listener in the cleanup function.

6. Fetch data from an API on component mount (e.g., users from JSONPlaceholder)  
   - Use useEffect to fetch data (like a list of users) from an API when the component first loads. Store the result in state and display it. Use the empty dependency array to run it only once.

7. Fetch data only when a button is clicked (conditional fetch with useEffect)  
   - Create a "Load Data" button. When clicked, update a state variable like `shouldFetch` to true. Use useEffect to fetch data only when `shouldFetch` becomes true.

8. Create a debounced search input (use setTimeout and clearTimeout)  
   - Make a search input field. When the user types, use a delay (e.g., 500ms) before updating a search result state. Use setTimeout in useEffect and clearTimeout in the cleanup function.

9. Toggle between dark and light theme and apply class to body  
   - Create a button to toggle between 'dark' and 'light' themes. Use useEffect to apply a class to the <body> tag based on the current theme state.

10. Track and display mouse position using an event listener  
   - Use useEffect to add an event listener for 'mousemove'. Update the X and Y position in state and display them on screen. Clean up the listener when the component unmounts.

11. Sync user preferences (like theme) with localStorage  
   - When the user selects a theme, store it in localStorage. Use useEffect to read from localStorage on component mount and apply the stored theme if available.

12. Auto-save form input to localStorage after delay  
   - Create a form input. Every time the user types, wait a short delay (e.g., 1 second) and then save the input value to localStorage using useEffect.

13. Create a countdown timer with useEffect  
   - Start a countdown from a certain number (e.g., 10). Use useEffect with setInterval to decrease the number every second, and clear the interval when it reaches 0.

14. Toggle a component’s visibility and log mount/unmount events  
   - Use a button to toggle showing and hiding a child component. Inside the child component, use useEffect to log messages when it mounts and when it unmounts (with cleanup).

15. Sync state across browser tabs using the 'storage' event  
   - Use localStorage to store a value like theme or a note. Use useEffect with a 'storage' event listener to detect changes to that value in other browser tabs and update the current tab’s state.