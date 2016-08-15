import React from 'react';
import { connect } from 'react-redux';

import { fetchPost } from '../actions/index';

class PostShow extends React.Component {
  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }
  
  render(){
    return (
      <div>{this.props.params.id}</div>
    );
  }
}

export default connect(null, { fetchPost })(PostShow);
