import React from 'react';

class PostIndex extends React.Component {
  componentWillMount(){
    console.log('this would be a good time to load data');
  }
  render() {
    return (
      <div>List of blog posts</div>
    );
  }
}


export default PostIndex;
