import React from 'react';
import { connect } from 'react-redux';

import { fetchPost } from '../actions/index';

class PostShow extends React.Component {
  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  render(){
    const { post } = this.props;
    if(!post){
      return <div>로오딩중우우웅...</div>
    }
    return (
      <div>
        <h3>{this.props.params.id} :: {post.title}</h3>
        <h6>{post.categories}</h6>
        <p>{post.content}</p>
      </div>

    );
  }
}

function mapStateToProps(state){
  return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost })(PostShow);
