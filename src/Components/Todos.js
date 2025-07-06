import React from 'react'
import Todo from '../Components/Todo';
// import Todo from './Todo';


const Todos = (props) => {
  const myStyle ={
    minHeight: "70vh",
    margin:"40px auto",
  }
  return (
   <div className="container my-3" style={myStyle}>
      <h3>Todos List</h3>
      {props.todos.length===0 ?"No Todos to display":
      props.todos.map((todo)=>{
        return (
        <>
        <Todo todo = {todo} key={todo.sno} onDelete={props.onDelete}/><hr/>
        </>
        )
      })
    }

   </div>
  )
}
export default Todos
