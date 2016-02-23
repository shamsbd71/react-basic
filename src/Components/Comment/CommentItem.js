import React, {Component} from 'react';

class CommentItem extends Component {
  render() {
    return (
      <article className="media">
        <figure className="media-left">
          <p className="image is-48x48">
            <img src={this.props.profilePicture}/>
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{this.props.name}</strong>
              <br/>
              {this.props.content}
            </p>
          </div>
        </div>
      </article>
    );
  }
}

CommentItem.propTypes = {
  content: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  profilePicture: React.PropTypes.string.isRequired
}

export default CommentItem;
