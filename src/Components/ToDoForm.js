import React from 'react';
import shortid from "shortid";
export default class ToDoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
        };
    }
    setText = (e) => {
        this.setState({
            text: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.text !== "") {
            this.props.addTodo({
                id: shortid.generate(),
                text: this.state.text,
                complete: false,
            });
        }
        this.setState({ text: "" });
    }
    render() {
        return (
            <form className="toDoForm" onSubmit={this.handleSubmit}>
                <input
                    value={this.state.text}
                    onChange={this.setText}
                    placeholder="Task"
                />
                <button class="sbmt_btn" type="submit">+</button>
            </form>
        );
    }
}