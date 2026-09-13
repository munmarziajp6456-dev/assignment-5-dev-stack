Project Description

Dev Stack is a modern React application where developers can explore different technologies and build their own developer stack. Users can add technologies to their stack, remove individual technologies, or clear the entire stack.

Live Project

Add your live project link here.

Technologies Used
React.js
JavaScript ES6+
CSS3
Vite
React Toastify
JSON
Features
Explore different frontend, backend, database and development technologies.
Add technologies to your personal developer stack without duplicate items.
Remove individual technologies or clear the complete stack.
Responsive design for mobile, tablet and desktop.
Toast notifications for all important actions.
Loading state while technology data is fetched from JSON.

##React Questions and Answers

1. What is JSX, and why is it used in React?

JSX is a way to write HTML-like code inside JavaScript. I use JSX in React because it makes my code easier to read and write.

2. What is the difference between props and state?

Props are used to send data from a parent component to a child component. State is used to store data inside a component, and I can change or update it when needed.

3. What does the useState hook do, and where did you use it in this project?

useState helps me store and update data in a component. In my project, I used it for selected technologies, loading state, and mobile menu state.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect runs some code after the component is rendered. I used it to load the technology data from my local JSON file when the app starts.

5. Why does every item in a .map() list need a unique key prop?

The key helps React identify each item in the list. This helps React update the correct item easily when something changes.

6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing something based on a condition. In my project, if there are no technologies in the selected stack, I show the message "Your stack is empty".

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

I pass data from a parent component to a child component using props. If I want the child to send something back, I pass a function from the parent as a prop. Then the child can call that function when needed.
