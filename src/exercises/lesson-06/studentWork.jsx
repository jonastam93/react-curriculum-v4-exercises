import { useState } from 'react';

import UserProfile from './components/UserProfile';
import TaskFilterButtons from './components/TaskFilterButtons';
import TaskItem from './components/TaskItem';

import useTasks from './hooks/useTasks';
import filterTasks from './utils/filterTasks';

export default function StudentWork() {
  const [filter, setFilter] = useState('all');

  // Custom hook handles data fetching + loading
  const { tasks, loading } = useTasks();

  // Utility handles filtering
  const visibleTasks = filterTasks(tasks, filter);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div>
      <h2>Welcome, Student</h2>

      <UserProfile name="Jonathan" role="React Student" />

      <TaskFilterButtons filter={filter} setFilter={setFilter} />

      <p>Current filter: {filter}</p>

      <ul>
        {visibleTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}
