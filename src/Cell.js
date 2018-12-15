import React, { Component } from "react";

export default class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = { color: this.props.value };
  }

  handleClick = () => {
    this.setState({ color: "#333" });
  };

  render() {
    return (
      <div
        className="cell"
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}
      />
    );
  }
}

// Cell should render a single < div > with a className of cell
// In render, the cell should set the background color in -line for
// the < div > by adding the following attribute: style = {{ backgroundColor: '#FFF' }}
//  ('#FFF' is just used as an example value here - the value should be state's color)
// Create a click listener which, when activated, updates the state to the
// following hex value: '#333'
