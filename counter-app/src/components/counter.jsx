import React, { Component } from "react";

class Counter extends Component {
  /*  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  } */
  componentDidUpdate(prevProps, prevStates) {
    // Called after the component is updated.
    // Which means we have new props / stateso we can compare new state/props with old state/props
    // if there is change we can ajax request to get new data from server
    console.log("prevProps", prevProps);
    console.log("prevStates", prevStates);
    if (prevProps.counter.value !== this.props.counter.value) {
      //Ajax call and get new data from server
    }
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    //console.log("props", this.props);
    console.log("Counter - Rendered");
    return (
      <div className="container">
        <div className="row">
          <div className="col-1">
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          </div>
          <div className="col-4">
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              className="btn btn-secondary btn-sm"
            >
              +
            </button>
            <button
              onClick={() => this.props.onDecrement(this.props.counter)}
              className="btn btn-secondary btn-sm m-2"
              disabled={this.props.counter.value === 0 ? "disabled" : ""}
            >
              -
            </button>
            <button
              onClick={() => this.props.onDelete(this.props.counter.id)}
              className="btn btn-danger btn-sm m-2"
            >
              x
            </button>
          </div>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
