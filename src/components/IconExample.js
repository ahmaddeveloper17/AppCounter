// IconExample.js
import React from 'react';
import { FaReact, FaCoffee } from 'react-icons/fa'; // Importing Font Awesome icons

const IconExample = () => {
  return (
    <div>
      <h1>React Icons Example</h1>
      <FaReact size={50} color="blue" />
      <FaCoffee size={50} color="brown" />
    </div>
  );
};

export default IconExample;
