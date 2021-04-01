import React from 'react';

const Box = ({width, height, color, removeBox, id}) => {
    const handleRemoveBox = () => {
        removeBox(id);
    }
    const styles = {
        container: {
            width: `${width}px`,
            height: `${height}px`,
            backgroundColor: color,
            margin: "1em",
            padding: "1em"
        }
    }
    return (
        <div className="BoxArea">
        <div className="Box" style={styles.container}></div>
        <button onClick={handleRemoveBox}>X</button>
        </div>
    )
}

export default Box;