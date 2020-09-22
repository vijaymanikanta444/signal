import React, { Component } from 'react';

export default class Sl3 extends Component {
  render() {
    return (
      <div>
        <button
          className={this.props.k < 31 ? 'green' : 'red'}
          width="200px"
          height="200px"
        ></button>
      </div>
    );
  }
}
