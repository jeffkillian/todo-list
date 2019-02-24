import React from "React"
import ReactDOM from "react-dom"
import ToDoApp from "./TodoApp"

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <ToDoApp />,
    document.getElementById("todo-list")
  )
})