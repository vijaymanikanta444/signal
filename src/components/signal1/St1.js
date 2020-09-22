import React, { Component } from 'react';

export default class St1 extends Component {
  render() {
    return (
      <div className="margin">
        <h1 className="text">{this.props.i}</h1>
      </div>
    );
  }
}
