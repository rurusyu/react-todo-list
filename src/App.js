import React, { Component } from "react";
import TodoListTemplate from "./component/TodoListTemplate";
import Form from "./component/Form";
import TodoItemList from "./component/TodoItemList";

// import TodoItemList from "./component/TodoItemList";

class App extends Component {
  id = 3;
  state = {
    input: "",
    todos: [
      { id: 0, text: "리액트 소개", checked: false },
      { id: 1, text: "벨로퍼트 소개", checked: true },
      { id: 2, text: "제로초 소개", checked: false }
    ]
  };

  handleToggle =( id ) =>{
    const {todos} = this.state;  
    const index = todos.findIndex(todo => todo.id === id); //기존배열의 인덱스가 몇번인지 고른후
    const selected = todos[index]; //그 인덱스를 선택
    const nextTodos = [...todos]; // 직접수정하면 안되니, 배열하나만들어서 복사 후
   
    nextTodos[index] = { // 그값을 덮어씌워버림
      ...selected,
      checked : !selected.checked
    };

    this.setState({
      todos : nextTodos  // 덮어씌운값으로 업데이트.
    });
  }


  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: "",
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.handleCreate();
    }
  };

  render() {
    const { input , todos} = this.state;  //todos 정보를 TodoItemList에 전달.
    const { handleChange, handleCreate, handleKeyPress,handleToggle } = this;
    return (
      <>
        <TodoListTemplate
          form={
            <Form
              value={input}
              onChange={handleChange}
              onCreate={handleCreate}
              onKeyPress={handleKeyPress}
            />
          }
        >
          <TodoItemList todos={todos} onToggle={handleToggle}/>
        </TodoListTemplate>
      </>
    );
  }
}

export default App;
