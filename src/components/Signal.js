import React, { Component } from 'react';
import St1 from './signal1/St1';
import Sl1 from './signal1/Sl1';
import St2 from './signal2/St2';
import Sl2 from './signal2/Sl2';
import St3 from './signal3/St3';
import Sl3 from './signal3/Sl3';
import St4 from './signal4/St4';
import Sl4 from './signal4/Sl4';
import Start from './Start';
import Stop from './Stop';

export default class Signal extends Component {
  state = {
    i: 60,
    j: 90,
    k: 120,
    l: 30,
  };

  start = () => {
    if (
      !this.interval1 &&
      !this.interval2 &&
      !this.interval3 &&
      !this.interval4
    ) {
      this.interval1 = setInterval(this.timer1, 1000);
      this.interval2 = setInterval(this.timer2, 1000);
      this.interval3 = setInterval(this.timer3, 1000);
      this.interval4 = setInterval(this.timer4, 1000);
    }
  };
  stop = () => {
    clearInterval(this.interval1);
    clearInterval(this.interval2);
    clearInterval(this.interval3);
    clearInterval(this.interval4);
    this.interval1 = this.interval2 = this.interval3 = this.interval4 = null;
    // this.interval2=null,
    // this.interval3=null,
    // this.interval4=null,

    // this.setState({ i: 60, j: 90, k: 120, l: 30 });
  };

  timer1 = () => {
    if (this.state.i > 0) {
      this.setState({ i: this.state.i - 1 });
    } else {
      this.setState({ i: 120 });
    }
  };

  timer2 = () => {
    if (this.state.j > 0) {
      this.setState({ j: this.state.j - 1 });
    } else {
      this.setState({ j: 120 });
    }
  };

  timer3 = () => {
    if (this.state.k > 0) {
      this.setState({ k: this.state.k - 1 });
    } else {
      this.setState({ k: 120 });
    }
  };
  timer4 = () => {
    if (this.state.l > 0) {
      this.setState({ l: this.state.l - 1 });
    } else {
      this.setState({ l: 120 });
    }
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="sub">
            <Sl1 i={this.state.i} />
            <St1 i={this.state.i} />
          </div>
          <div className="sub">
            <Sl2 j={this.state.j} />
            <St2 j={this.state.j} />
          </div>
          <div className="sub">
            <Sl3 k={this.state.k} />
            <St3 k={this.state.k} />
          </div>
          <div className="sub">
            <Sl4 l={this.state.l} />
            <St4 l={this.state.l} />
          </div>
        </div>
        <div className="container">
          <Start start={this.start} />
          <Stop stop={this.stop} />
        </div>
      </div>
    );
  }
}
