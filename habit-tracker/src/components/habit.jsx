import React, { PureComponent } from "react";

class Habit extends PureComponent {
  state = {
    count: 0,
  };

  render() {
    const { name, count } = this.props.habit;
    // const { name } = this.props.habit;
    // const { count } = this.props;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={() => this.props.onIncrement(this.props.habit)}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={() => this.props.onDecrement(this.props.habit)}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={() => this.props.onDelete(this.props.habit)}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
