import React from "react";

export const TaskForm = ({ newTodo, onNewTodoChange, onFormSubmit }) => {
    
    return (
        <form onSubmit={onFormSubmit}>
            <h2>Welcome to the app</h2>
            <textarea value={newTodo} onChange={onNewTodoChange} />
            <button type="submit">Submit form</button>
        </form>
    )    
}
