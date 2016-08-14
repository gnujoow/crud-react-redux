import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostIndex extends React.Component {
  componentWillMount(){
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <div className="text-md-right">
          <Link to="/posts/new" className="btn btn-primary">
            글쓰기
          </Link>
        </div>
        List of blog posts
      </div>
    );
  }
}

export default connect(null, { fetchPosts })(PostIndex);
