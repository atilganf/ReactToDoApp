import React from "react"
import ToDoForm from "./ToDoForm"
import ToDoElm from "./ToDoElm"
export default class ToDoList extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         todos: [],
         todoShow: "all",
         toggleAll: true
      };
   }
   addTodo = todo => {
      this.setState({
         todos: [todo, ...this.state.todos]
      })
   }
   
   
   changeToDoShow = (str) => {
      this.setState({
         todoShow: str,
      })
   }
   toggleAllComplete = () => {
      this.setState({
         todos: this.state.todos.map(todo => {
            return {
               ...todo,
               complete: this.state.toggleAll,
            }
         }),
         toggleAll: !this.state.toggleAll
      });
   }
   deleteAllComplete = () => {
      this.setState({
         todos: this.state.todos.filter(todo => !todo.complete)
      })
   }
   //ToDoElm methods
   deleteToDo = (id) => {
      this.setState({
         todos: this.state.todos.filter(todo => todo.id !== id)
      })
   }
   toggleComplete(id) {
      this.setState({
         todos: this.state.todos.map(todo => {
            if (todo.id === id) {
               return {
                  ...todo,
                  complete: !todo.complete
               }
            } else {
               return todo
            }
         }),
      })
   }
   render() {
      let todos = []
      if (this.state.todoShow === "all") {
         todos = this.state.todos;
      } else if (this.state.todoShow === "active") {
         todos = this.state.todos.filter(todo => !todo.complete);
      } else {
         todos = this.state.todos.filter(todo => todo.complete);
      }
      return (
         <div>
            <ToDoForm addTodo={this.addTodo} />
            <button onClick={() => this.changeToDoShow("all")}>All</button>
            <button onClick={() => this.changeToDoShow("active")}>Active</button>
            <button onClick={() => this.changeToDoShow("complete")}>Complete</button>
            <div>Todos Left : {this.state.todos.filter(todo => !todo.complete).length}</div>
            {todos.map(todo => (
               <ToDoElm
                  key={todo.id}
                  todo={todo}
                  toggleComplete={() => this.toggleComplete(todo.id)}
                  onDelete={() => this.deleteToDo(todo.id)}
               />)
            )}
            {this.state.todos.some(todo => todo.complete) ?
               <button
                  onClick={() => this.deleteAllComplete()}
               >Delete All Complete</button> : null}
            <button onClick={() => this.toggleAllComplete()}>Toggle All Complete</button>
         </div>
      );
   }
}