import React, { Component } from 'react';

export default class Sl2 extends Component {
  render() {
    return (
      <div>
        <button
          className={this.props.j < 31 ? 'green' : 'red'}
          width="200px"
          height="200px"
        ></button>
      </div>
    );
  }
}
