import React from "react"


export default class TodoList extends React.Component {

  constructor(options){
    super(options)
    this.state = {
      todos: [],
      inputValue: ""
    }
    this.uniqueId = 0;

    document.addEventListener("keypress", (e) =>{
      if (e.keyCode == 13) this.addTodo()
    })

  }
  
  render(){
    return(
      <div className="border m-3 p-3">
        <input onChange={this.onChangeName} value={this.state.inputValue}></input>
        <button className="ml-3 btn btn-primary" onClick={this.addTodo}>Add new</button>
        {this.state.todos.map((todo, index) => {

          let removeFunc = ()=> {
            this.removeTodo(todo.id)
          }
          return (
            <TodoItem name={todo.name} index={index+1} removeFunc={removeFunc}/>
          )

        })} 
      </div>
    )
  }

  removeTodo(id){
    let newTodos = this.state.todos.slice()
    newTodos = newTodos.filter(todo => {
      return todo.id != id
    })

    this.setState({todos: newTodos})


  }

  onChangeName = (e)=> {
    this.setState({
      inputValue: e.target.value
    })
  }

  addTodo =()=>{
    let newTodos = this.state.todos.slice()
    let newTodo = {name: this.state.inputValue, id: this.uniqueId, done: false}
    newTodos.push(newTodo)
    this.setState({todos: newTodos, inputValue: ""  })
    this.uniqueId++; 
  }
}

class TodoItem extends React.Component {
  
  render(){
    return (
      <div className="pb-1">
      {this.props.index}. {this.props.name}
        <button a href="#" onClick={this.props.removeFunc} className=" btn btn-danger ml-2"> X</button>
      </div>
    )
  }
}