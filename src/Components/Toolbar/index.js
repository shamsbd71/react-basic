import React, {Component} from 'react';

class Toolbar extends Component {
  //onClick={this.addLike.bind(this)}
  toggleLike()
  {
    this.props.toggleLike(this.props.statusIndex);
  }


  render() {
    return (
      <small>
        <a className="button" onClick={this.toggleLike.bind(this)}>
          <i ref="likeBox">{this.props.likes}</i> {(this.props.liked ? 'Unlike' : 'Like')}
        </a>
        <a className="button"><i className="fa fa-pencil" /> Reply</a>
      </small>
    );
  }
}

export default Toolbar;
