// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";



//  Step 1 - add a property on state that controls each input
//  Step 2 - On the input add a value attribute - pass in the state property to the value attribute
//  Step 3 - add onChange and pass in teh change handler function
//  Step 4 - on the input, add a name attr that is the same as the state property that is controlling that input


const TodoList = props => {
    return (
        <div>
            <div>
                <form className="form">
                    <input 
                        value={props.item}
                        name="item"
                        placeholder="Get it Done!"
                        onChange={props.handleChanges}
                        />
                </form>
            </div>
            <div>
                <button onClick={props.updateList}>Add Todo</button>
                <button>Clear Completed</button>
            </div>
       </div>
    )
}

export default TodoList;