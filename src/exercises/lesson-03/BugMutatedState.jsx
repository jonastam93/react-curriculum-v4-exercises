// src/exercises/lesson-03/BugMutatedState.jsx

/*
  BUG #2 — State Issue

  This component displays a count and updates it when the button is clicked.
  However, the way the count is being changed causes the component to behave
  incorrectly.
*/

import { useState } from 'react';
export default function BugMutatedState() {
  let [count, setCount] = useState(0);

  function handleAdd() {
    setCount((previous) => previous + 1);
  }

  return (
    <div>
      <p>Bug 2 Count: {count}</p>
      <button onClick={handleAdd}>Add 1</button>
    </div>
  );
}

// Explanation:
// (Write your explanation here)
// The issue was caused by directly mutating the state using count++. In React,
// state should not be modified directly because React relies on detecting
// changes to trigger re-renders. By using the setCount function with the
// functional update form, we avoid mutating the original state and ensure
// React properly updates and re-renders the component.
