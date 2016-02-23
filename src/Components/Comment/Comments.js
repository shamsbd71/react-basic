import React, {Component} from 'react';
import CommentItem from './CommentItem';


class Comments extends Component {
  randerComment(comment){
    let {content, name, profilePicture} = comment;

    return(
      <CommentItem content={content} name={name} profilePicture={profilePicture}/>
    )
  }
  render() {
    return (
      <div>
        {
          this.props.comments.map(this.randerComment)
        }
      </div>
    );
  }
}

Comments.propTypes = {
  comments: React.PropTypes.array.isRequired
}

export default Comments;
