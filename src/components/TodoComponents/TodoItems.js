import React from 'react';



function TodoItems(props) {
    return (
        <h3 onClick={() =>  props.toggleItem(props.toDoList.id)} className="listItem">{props.listProp.item}</h3>
    );
}

export default TodoItems;