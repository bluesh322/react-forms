import React, { useState } from 'react';
import './Todo.css';

const Box = ({todo, removeTodo, update, id}) => {
    const [editTodo, setEditTodo] = useState(todo);
    const [isEditing, setIsEditing] = useState(false);
    const [markComplete, toggleMarkComplete] = useState(false);
    let className = 'strike';
    const handleRemoveTodo = () => {
        removeTodo(id);
    }

    markComplete ? className = 'Todo strike' : className = 'Todo';

    const handleMarkComplete = () => {
        // const p = document.getElementById(id);
        // p.classList.toggle("strike")
        toggleMarkComplete(markComplete => !markComplete);
    }
    const handleUpdate = (e) => {
        e.preventDefaults();
        update(id, editTodo);
        setIsEditing(false);
    }
    const toggleEdit = () => {
        setIsEditing(isEditing => !isEditing);
    }
    const handleChange = e => {
        setEditTodo(e.target.value);
    }


    return !isEditing ? (
        <div className="TodoArea">
        <p id={id} className={className}>{todo}</p>
        <button onClick={handleRemoveTodo}>X</button>
        <button onClick={toggleEdit}>Edit</button>
        <button onClick={handleMarkComplete}>Mark Complete</button>
        </div>
    ): (
        <div>
            <form onSubmit={handleUpdate}>
                <input 
                value={editTodo} onChange={handleChange}
                type="text"/>
                <button>Update</button>
            </form>
        </div>
    )
}

export default Box;