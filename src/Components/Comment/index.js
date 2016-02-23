import React, {Component} from 'react';
import Comments from './Comments';
import CommentForm from './CommentForm';

class Comment extends Component {
  render() {
    return (
      <div className="Commentbox">
        <Comments comments={this.props.comments} />
        <hr/>
        <CommentForm addComment={this.props.addComment} statusIndex={this.props.statusIndex}/>
      </div>
    );
  }
}

Comment.propTypes = {
  comments: React.PropTypes.array.isRequired
}

export default Comment;
