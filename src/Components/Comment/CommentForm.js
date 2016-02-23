import React, {Component} from 'react';

class CommentForm extends Component {
  postComment(){
    this.props.addComment(this.refs.textarea.value, this.props.statusIndex);

    this.clearTextarea.call(this);
  }

  clearTextarea(){
    this.refs.textarea.value = "";
  }

  render() {
    return (
      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img src="http://placehold.it/128x128"/>
          </p>
        </figure>
        <div className="media-content">
          <p className="control">
            <textarea className="textarea" ref="textarea" placeholder="Add a comment..."></textarea>
          </p>
          <p className="control">
            <button onClick={this.postComment.bind(this)} className="button">Post comment</button>
          </p>
        </div>
      </article>
    );
  }
}
;

export default CommentForm;
