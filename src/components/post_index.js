import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostIndex extends React.Component {
  componentWillMount(){
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <span className="pull-md-right">{post.categories}</span>
          <strong>{post.title}</strong>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-md-right">
          <Link to="/posts/new" className="btn btn-primary">
            글쓰기
          </Link>
        </div>
        <h3>블로그 리스트</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchPosts })(PostIndex);
