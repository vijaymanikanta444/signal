import React, { Component } from 'react';

export default class Stop extends Component {
  render() {
    return (
      <div>
        <button className="stop" onClick={this.props.stop}>
          STOP
        </button>
      </div>
    );
  }
}
