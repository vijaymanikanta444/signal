import React, { Component } from 'react';

export default class Sl1 extends Component {
  render() {
    return (
      <div>
        <button
          className={this.props.i < 31 ? 'green' : 'red'}
          width="200px"
          height="200px"
        ></button>
      </div>
    );
  }
}
