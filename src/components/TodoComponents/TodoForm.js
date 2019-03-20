import React from 'react';



function TodoItems(props) {
    return (
        <h3 className="listItem">{props.listProp.item}</h3>
    );
}

export default TodoItems;