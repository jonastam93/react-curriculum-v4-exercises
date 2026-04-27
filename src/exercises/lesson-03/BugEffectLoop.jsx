//src/exercises/lesson-03/BugEffectLoop.jsx

/* 
  BUG #1 — Effect Issue 

  This component uses useState and useEffect to update a value.
  The effect is running on every render, which causes the
  component to behave incorrectly.
  */

import { useEffect, useState } from 'react';

export default function BugEffectLoop() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount((previous) => previous + 1);
  }, []);

  return <p>Bug 1 Count: {count}</p>;
}

// Explanation:
// (Write your explanation here)
// The useEffect was running on every render because it didn't include a dependency
// array. This caused an infinite loop because of setCount, which triggered a re-render,
// causing the effect to run again. By adding an empty dependency array, the effect now
// runs only once when the component mounts.
