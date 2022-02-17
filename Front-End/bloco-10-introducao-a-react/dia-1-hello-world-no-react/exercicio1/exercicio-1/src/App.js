import React from "react";

const Task = (value, index) => {
  return (
    <li key={index}>{value}</li>
  );
}

function App() {
  return (
    <ul>
      {Array.of('Ir ao mercado', 'Passear com o cachorro', 'Estudar')
      .map((elem, index) => Task(elem, index))}
    </ul>    
  );
}

export default App;
