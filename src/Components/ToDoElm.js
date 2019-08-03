import React from "react"
export default props => (
    <div>
        <div style={{
            textDecoration: props.todo.complete ? "line-through" : "",
            color: props.todo.complete ? "#007bff" : "#28a745",
            display : "inline-block",
            cursor: "pointer",
            padding: "2px",
        }}
            onClick={props.toggleComplete}
        >{props.todo.text}</div>
        <button style={{display: "inline-block"}}onClick={props.onDelete}>X</button>
    </div>
)