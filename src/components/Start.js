import React, { Component } from 'react';

export default class Start extends Component {
  render() {
    return (
      <div>
        <button className="start" onClick={this.props.start}>
          START
        </button>
      </div>
    );
  }
}
