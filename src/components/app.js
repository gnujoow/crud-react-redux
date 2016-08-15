import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        여기에 네비게이션바가 들어가겠지
        <hr />
        {this.props.children}
      </div>
    );
  }
}
