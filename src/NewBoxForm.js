import React, {useState} from "react";

const NewBoxForm = ({addBox}) => {
    const INITIAL_STATE = {
        width:"",
        height:"",
        color:"",
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
        addBox(formData);
        setFormData(INITIAL_STATE);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="width">width</label>
            <input id="width" type="text" name="width" placeholder="width" value={formData.width} onChange={handleChange}/>
            <label htmlFor="height">height</label>
            <input id="height" type="text" name="height" placeholder="height" value={formData.height} onChange={handleChange}/>
            <label htmlFor="color">color</label>
            <input id="color" type="text" name="color" placeholder="color" value={formData.color} onChange={handleChange}/>
            <button>Add Box</button>
        </form>
    )
}

export default NewBoxForm