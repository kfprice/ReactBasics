import React from 'react';

const HelloWorld = () => {
  function handleClick() {
    alert('button clicked!');
  }

  const name = 'Kemet';

  const addition = +2;

  return (
    <div>
      <h1 className="title"> Title</h1>
      <h2>Sub title</h2>
      <p>Paragraph</p>
      <p>{name}</p>
      <p>{addition}</p>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
};

export default HelloWorld;