import React, { Component } from "react";
import "./TodoItem.css";
class TodoItem extends Component {

  //최적화.shouldComponentUpdate가 리랜더링 할지말지 정함.
  shouldComponentUpdate(nextProps, nextState){
    return this.props.checked !== nextProps.checked;
  }


  render() {
    const { text, checked, id, onToggle, onRemove } = this.props;   
    console.log(id);
    this.onClickToggle = () => {
      onToggle(id);
    };

    return (
      <div className="todo-item" onClick={this.onClickToggle}>
        <div
          className="remove"
          onClick={e => {
            e.stopPropagation(); // onToggle 이 실행되지 않도록 함
            onRemove(id);
          }}
        >
          &times;
        </div>
        <div className={`todo-text ${checked && "checked"}`}>
          <div>{text}</div>
        </div>
        {checked && <div className="check-mark">✓</div>}
      </div>
    );
  }
}

export default TodoItem;
