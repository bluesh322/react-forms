import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import {v4 as uuid} from 'uuid';

const BoxList = () => {
    const INITIAL_STATE = [
        {
            width: 100,
            height: 100,
            color: "black",
            id: uuid()
        }
    ]
  const [boxes, setBoxes] = useState(INITIAL_STATE);

  const addBox = (box) => {
      let newBox = {...box, id: uuid()}
      setBoxes(boxes => [...boxes, newBox]);
  };

  const removeBox = (id) => {
      setBoxes(boxes.filter(b => b.id !== id));
  };

  return (
    <div className="content">
      <div className="NewBoxForm">
        <NewBoxForm addBox={addBox}/>
      </div>

      <div className="BoxList">
        {boxes.map(({width, height, color, id}) => (
          <Box
            width={width}
            height={height}
            color={color}
            removeBox={removeBox}
            id={id}
            key={id}
          />
        ))}
      </div>
    </div>
  );
};

export default BoxList;
