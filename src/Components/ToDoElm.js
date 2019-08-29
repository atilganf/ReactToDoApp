import React from "react"
export default props => (
   <div className="toDoElm">
      <div className={props.todo.complete ? "toDoTxt complete" : "toDoTxt" } 
         onClick={props.toggleComplete}
      >{props.todo.text}
      </div>
      <button className="del_btn"
         style={{ display: "inline-block" }}
         onClick={props.onDelete}>X
      </button>
   </div>
)