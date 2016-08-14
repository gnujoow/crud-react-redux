import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import { createPost } from '../actions/index';

class PostNew extends Component {
  render () {
    const { fields: {title, categories, content}, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>포스트 만들기 </h3>
        <div className="form-group">
          <label>제목</label>
          <input type="text" className="form-control" {...title} />
        </div>

        <div className="form-group">
          <label>분류</label>
          <input type="text" className="form-control" {...categories}/>
        </div>

        <div className="form-group">
          <label>내용</label>
          <textarea className="form-control" {...content} />
        </div>

        <button type="submit" className="btn btn-primary">보내기</button>
      </form>
    );
  }
}


// connect: first argument is mapToStateToProps, 2nd is mapDispatchToProps
// reduxForm : 1st is form config 2nd is mapToStateToProps 3rd is mapDispatchToProps

export default reduxForm({
  form: 'PostNewForm',
  fields: ['title', 'categories', 'content' ]
},null, { createPost })(PostNew);
