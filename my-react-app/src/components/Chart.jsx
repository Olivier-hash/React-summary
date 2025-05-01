import React, { useState } from 'react';
import ExpensiveList from '../components/ExpensiveList';
import { useSortedItems } from '../hooks/useSortedItems';

const PerformanceTestPage = () => {
  const [items] = useState(
    Array.from({ length: 1000 }, (_, i) => ({
      id: i,
      value: Math.floor(Math.random() * 1000),
    }))
  );
  const [counter, setCounter] = useState(0);

  const sortedItems = useSortedItems(items);

  return (
    <div>
      <h1>Performance Test Page</h1>
      <button onClick={() => setCounter(counter + 1)}>Update Counter</button>
      <p>Counter: {counter}</p>
      <ExpensiveList items={sortedItems} />
    </div>
  );
};

export default PerformanceTestPage;
