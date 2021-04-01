import React, {useState} from "react";

const NewTodoForm = ({addTodo}) => {
    const INITIAL_STATE = {
        todo: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        e.preventDefault();
        const {name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name] : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(formData);
        setFormData(INITIAL_STATE);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todo">todo</label>
            <input id="todo" type="text" name="todo" placeholder="todo" value={formData.todo} onChange={handleChange}/>
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodoForm