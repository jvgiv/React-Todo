import React from 'react';

import TodoList from "./components/TodoComponents/TodoList";
import TodoItems from "./components/TodoComponents/TodoForm";

const toDoList = [{ item: 'To Do:'}];



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      itemList: toDoList,
      item: ""

    };
  }

  handleChanges = event => {
    console.log(event.target)
    // This is going to update the name property on state
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  updateList = event => {
    event.preventDefault();
    const newTodoList = {
      item: this.state.item
    }
    
    this.setState({
      itemList: [...this.state.itemList, newTodoList],
      
    });
  }
    
  render() {
    return (
      <div>
        <div>
          <h2>Welcome to your Todo App!</h2>
        </div>
        <div className="toDoList-wrapper">
          {this.state.itemList.map((toDoList, index) => (
            <TodoItems key={index} listProp={toDoList} />
          ))}
          {/* <TodoItems /> */}
          <TodoList 
            item={this.state.item}
            handleChanges={this.handleChanges}
            updateList={this.updateList}
          />
        </div>
      </div>
    );
  }
}

export default App;
