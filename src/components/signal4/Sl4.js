import React, { Component } from 'react';

export default class Sl4 extends Component {
  render() {
    return (
      <div>
        <button
          className={this.props.l < 31 ? 'green' : 'red'}
          width="200px"
          height="200px"
        ></button>
      </div>
    );
  }
}
