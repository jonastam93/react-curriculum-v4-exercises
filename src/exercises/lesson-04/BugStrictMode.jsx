// TOPIC: StrictMode Effects and Cleanup
// TASK: Notice how the count increments incorrectly based on the `setInterval` logic. Fix the useEffect so that the counter increments correctly.

import { useEffect, useState } from 'react';

export default function BugStrictMode() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    // cleanup function
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h2>StrictMode Timer Bug</h2>
      <p>Count: {count}</p>
    </div>
  );
}

// Write your explanation of how StrictMode helps us catch this bug

// React.StrictMode mounts components twice in development to detect side
// effects that aren't cleaned up. In this case, the useEffect creates a
// setInterval but doesn't clear it when the component unmounts. As a
// result, multiple intervals run simultaneously, causing the counter
// to increment incorrectly. By adding a cleanup function that calls clearInterval,
// we ensure only one interval runs at a time. StrictMode exposes this issue
// early so it doesn't cause bugs in production.
