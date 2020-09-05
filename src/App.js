import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  console.warn("props",props.todos)
  const handler=()=>
  {
    // console.warn("app",props)
    props.toggleTodo("hello")
  }
  return (
    <div className="App">
     <div className="header">
       <h1>E-Comm</h1>
     </div>
     <div className="content" >
       <h2>Body</h2>
       <button onClick={handler}> Click me</button>
     </div>
    </div>
  );
}

export default App;
