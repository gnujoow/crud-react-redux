import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import { createPost } from '../actions/index';

class PostNew extends Component {
  render () {
    const { fields: {title, categories, content}, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>포스트 만들기 </h3>

        <div className={`form-group ${title.touched && title.error ? 'has-danger' : ''}`} >
          <label>제목</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help form-control-label">
            {title.touched ? title.error : '' }
          </div>
        </div>

        <div className={`form-group ${categories.touched && categories.error ? 'has-danger' : ''}`} >
          <label>분류</label>
          <input type="text" className="form-control" {...categories}/>
          <div className="text-help form-control-label">
            {categories.touched ? categories.error : '' }
          </div>
        </div>

        <div className={`form-group ${content.touched && content.error ? 'has-danger' : ''}`} >
          <label>내용</label>
          <textarea className="form-control" {...content} />
          <div className="text-help form-control-label">
            {content.touched ? content.error : '' }
          </div>
        </div>

        <button type="submit" className="btn btn-primary">보내기</button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if(!values.title){
    errors.title = '제목을 입력하세요';
  }
  if(!values.categories){
    errors.categories = '분류를 입력하세요';
  }
  if(!values.content){
    errors.content = '내용을 입력하세요';
  }
  return errors;
}


// connect: first argument is mapToStateToProps, 2nd is mapDispatchToProps
// reduxForm : 1st is form config 2nd is mapToStateToProps 3rd is mapDispatchToProps

export default reduxForm({
  form: 'PostNewForm',
  fields: ['title', 'categories', 'content' ],
  validate
},null, { createPost })(PostNew);
