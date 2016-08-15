import React from 'react';
import { connect } from 'react-redux';

import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';

class PostShow extends React.Component {
  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  onDeleteClick() {
    this.props.deletePost(this.props.params.id);
  }

  render(){
    const { post } = this.props;
    if(!post){
      return <div>로오딩중우우웅...</div>
    }
    return (
      <div>
        <Link to="/">돌아가기</Link>
        <button className="btn btn-warning pull-md-right"
          onClick={this.onDeleteClick.bind(this)}>
          삭제
        </button>
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

export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow);
