// import React, { useReducer, useState } from 'react'

// const CounterPage = () => {

//   const [state , dispatch] = useReducer(reducer , {counter: 0})

//   const {counter} = state;

//   return (
//     <div className="flex justify-center items-center h-[100vh]">
//       <button
//         onClick={() => dispatch({ type: "decreaseCount", payload: 3 })}
//         className="text-white bg-red-800 w-[40px] h-[40px]"
//       >
//         -
//       </button>
//       <h1 className="text-white flex justify-center items-center w-[40px] h-[40px] bg-yellow-500">
//         {counter}
//       </h1>
//       <button
//         onClick={() => dispatch({ type: "increaseCount" , payload: 4 })}
//         className="text-white bg-green-800 w-[40px] h-[40px]"
//       >
//         +
//       </button>
//     </div>
//   );
// }

// export default CounterPage