import React from 'react';

class PostShow extends React.Component {
  render(){
    return (
      <div>{this.props.params.id}</div>
    );
  }
}

export default PostShow;
