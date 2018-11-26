import React, { Component } from 'react';
import Cell from './Cell'

  const generateDefaultMatrix = () => {
  let matrix = [];
  let length = 10;
  let row = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
  for (let i = 0; i < length; i++) {
    matrix.push(row);
  }
  return matrix
}

export default class Matrix extends Component {
  
  genRow = (vals) => (
    vals.map((val, index) => <Cell key={index} value={val} />) // replace me and render a cell component instead!
  )
  
  genMatrix = () => (
    this.props.values.map((rowVals, index) => <div key={index} className="row">{this.genRow(rowVals)}</div>)
  )
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

Matrix.defaultProps = {
  values: generateDefaultMatrix()
}
