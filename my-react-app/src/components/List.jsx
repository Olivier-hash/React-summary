import React from 'react';

const ExpensiveList = React.memo(({ items }) => {
  console.log("Rendering ExpensiveList");

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.value}</li>
      ))}
    </ul>
  );
});

export default ExpensiveList;
