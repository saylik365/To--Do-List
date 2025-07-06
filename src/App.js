// import './App.css';
// import Header from './Components/Header';
// import Todos from './Components/Todos';
// import Todo from './Components/Todo';
// import AddTodo from './Components/AddTodo';
// // import {Footer} from './Components/Footer';
// import React, { useState } from 'react';

// function App() {
//   const onDelete=(todo)=>{
//     console.log("onDelete", todo);
//     setTodos(todos.filter((e)=>{
//       return e!==todo; //filtering out the todo which is not equal to the todo we want to delete
//     }))
//   }

//   const addTodo =(title, desc)=>{
//     console.log("T am adding this Todo", title, desc);
//   }

//   const[todos, setTodos] = useState([ //setToods is a function which will update todos
//   {
//     sno: 1,
//     title: "You need to go to the market",
//     desc: "To get this job done1"
//   },
//   {
//     sno: 2,
//     title: "You need to go to the Mall",
//     desc: "To get this job done2"
//   },
//   {
//     sno: 3,
//     title: "You need to go to the ghat",
//     desc: "To get this job done3"
//   }
//   ]);
//   return (
//   <>
//   <Header title="My Todos list" searchBar="{true}"/>
//   {/* <Footer/> */}
//   <AddTodo addTodo={addTodo}/>
//   <Todos todos = {todos} onDelete={onDelete}/>
//   {/* <Todo/> */}
//   </>
//   );
// }
// export default App;


// import "./App.css";
// import Header from "./Components/Header";
// import Todos from "./Components/Todos";
// import AddTodo from "./Components/AddTodo";
// import About from "./Components/About";
// import { Footer } from "./Components/Footer";
// import React, { useEffect, useState } from "react";
// import {
//   BrowserRouter as Router,
//   // Switch,
//   Routes, //new V6+ uses Routes instead of Switch
//   Route
// } from "react-router-dom";

// function App() {
//   let initTodo;

//   if (localStorage.getItem("todos") === null) {
//     initTodo = [];
//   } else {
//     initTodo = JSON.parse(localStorage.getItem("todos"));
//   }

//   const [todos, setTodos] = useState(initTodo);

//   const onDelete = (todo) => {
//     console.log("onDelete", todo);
//     setTodos(todos.filter((e) => e !== todo));
//     // ❌ Don't manually set localStorage here; useEffect will handle it
//   };

//   const addTodo = (title, desc) => {
//     console.log("I am adding this Todo", title, desc);
//     const sno = todos.length > 0 ? todos[todos.length - 1].sno + 1 : 1;
//     const myTodo = {
//       sno: sno,
//       title: title,
//       desc: desc,
//     };
//     setTodos([...todos, myTodo]);
//   };

//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }, [todos]);

//   return (
//     <>
//     <Router>
//       <Header title="My Todos list" searchBar={true} />
//       <Routes>
//         <Route exact path="/" render={()=>{
//             return(
//             <> 
//               <AddTodo addTodo={addTodo} />
//               <Todos todos={todos} onDelete={onDelete} />
//             </>)
//           }}>
//         </Route>
//         <Route exact path="/about">
//             <About />
//         </Route>
//       </Routes>
//       <Footer />
//     </Router>
//     </>
//   );
// }

// export default App;

import "./App.css";
import Header from "./Components/Header";
import Todos from "./Components/Todos";
import AddTodo from "./Components/AddTodo";
import About from "./Components/About";
import { Footer } from "./Components/Footer";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  let initTodo;

  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);

  const onDelete = (todo) => {
    console.log("onDelete", todo);
    setTodos(todos.filter((e) => e !== todo));
  };

  const addTodo = (title, desc) => {
    console.log("I am adding this Todo", title, desc);
    const sno = todos.length > 0 ? todos[todos.length - 1].sno + 1 : 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Router>
      <Header title="My Todos list" searchBar={true} />
      <Routes>
        <Route path="/" element={ //use element instead of render
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

