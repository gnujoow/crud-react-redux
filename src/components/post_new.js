import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class PostNew extends Component {
  render () {
    const { fields: {title, categories, content}, handleSubmit } = this.props;
    console.log(title);

    return (
      <form onSubmit={handleSubmit}>
        <h3>포스트 만들기 </h3>
        <div className="form-group">
          <label>제목</label>
          <input type="text" className="form-control" {...title} />
        </div>

        <div className="form-group">
          <label>분류</label>
          <input type="text" className="form-control" {..categories}/>
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

// user types something in.. record it on application state
export default reduxForm({
  form: 'PostNewForm',
  fields: ['title', 'categories', 'content' ]
})(PostNew);
