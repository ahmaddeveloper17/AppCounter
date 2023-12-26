// import React from 'react'
// import { useState } from 'react';


// export default function Counter() {

// let [number , setNumber] = useState(0);

//     function addNumber() {
//     if (number<50) {
//         setNumber (number + 1)
//     }
//     }
//     function subtractNumber() {
//      if (number>0) {
//         setNumber(number - 1)
//      }
//     }

    


//   return (
//     <div style={{marginTop:"10%",textAlign:"center",justifyContent:"center"}}>
//     <h1>Numbar Counter</h1>
//     <button onClick={addNumber}>Add Number</button>
//     <h1>{number}</h1>
//     <button onClick={subtractNumber}>Subtract Number</button>
    
    
    
//     </div>
//   )
// }














import React, { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  const handleKeyDown = (event) => {
    switch (event.key) {
      case 'ArrowUp':
        if (number < 50) {
          setNumber(number + 1);
        }
        break;
      case 'ArrowDown':
        if (number > 0) {
          setNumber(number - 1);
        }
        break;
      default:
        break;
    }
  };

  return (
    <div
      style={{ marginTop: '10%', textAlign: 'center', justifyContent: 'center' }}
      onKeyDown={handleKeyDown}
      tabIndex={0} // Make the component focusable to receive keyboard events
    >
      <h1>Number Counter</h1>
      <button onClick={() => setNumber(Math.min(number + 1, 50))}>Add Number</button>
      <h1>{number}</h1>
      <button onClick={() => setNumber(Math.max(number - 1, 0))}>Subtract Number</button>
    </div>
  );
}