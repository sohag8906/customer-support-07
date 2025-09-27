1### What is JSX, and Why is it Used?

**JSX (JavaScript XML)** is a syntax extension for JavaScript that allows you to write HTML-like code inside your JavaScript files. It is primarily used with **React** to describe what the UI should look like.  

#### Key Points:
- JSX looks like HTML but is actually transformed into JavaScript function calls (`React.createElement`) under the hood.
- It makes writing and understanding React components easier because you can visualize the UI structure directly in your code.
- It allows embedding JavaScript expressions inside HTML using `{}` braces.
- JSX improves code readability and maintainability by combining UI logic and markup in a single place.

#### Example:
```jsx
const element = <h1>Hello, world!</h1>;


2### Difference Between State and Props

In React, **State** and **Props** are both used to manage data, but they serve different purposes.

| Aspect            | State                                     | Props                                           |
|------------------|-------------------------------------------|------------------------------------------------|
| **Definition**    | State is a local, mutable data storage used inside a component. | Props (short for properties) are read-only data passed from parent to child components. |
| **Mutability**    | Can be changed within the component using `setState` (or `useState` in functional components). | Cannot be changed by the child component; they are immutable. |
| **Ownership**     | Owned by the component itself.            | Owned by the parent component.                |
| **Usage**         | Used to handle dynamic data that changes over time (e.g., form inputs, counters). | Used to pass data and event handlers from parent to child components. |
| **Example**       | `const [count, setCount] = useState(0);`  | `<ChildComponent title="Hello" />`            |

#### Example in Code:
```jsx
// Parent component
function Parent() {
  const [count, setCount] = useState(0); // State

  return <Child title="Counter App" count={count} />;
}

// Child component
function Child({ title, count }) { // Props
  return (
    <div>
      <h1>{title}</h1>
      <p>{count}</p>
    </div>
  );
}

3### What is the `useState` Hook and How Does It Work?

In React, the `useState` hook is a **special function** that allows functional components to manage **state**. Before hooks, only class components could have state. With `useState`, you can store and update values that can change over time, such as form inputs, counters, or fetched data.

#### Syntax:

```javascript
const [state, setState] = useState(initialValue);

4### How to Share State Between Components in React

In React, state is **local to the component** where it is defined. However, sometimes you need to share state between multiple components. There are several ways to do this:

---

#### 1. **Lifting State Up**
- Move the shared state to the **closest common parent** of the components that need it.
- Pass the state and the updater function as **props** to the child components.

5### Event Handling in React

In React, events are handled **differently from plain HTML**. React uses **camelCase** syntax for events, and instead of strings, you pass a **function** as the event handler.

---

#### 1. **Basic Example**

```jsx
import React from 'react';

function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <button onClick={handleClick}>Click Me</button>
  );
}

export default App;