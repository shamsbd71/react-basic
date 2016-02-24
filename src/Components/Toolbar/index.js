import React, {Component} from 'react';

class Toolbar extends Component {
  //onClick={this.addLike.bind(this)}
  increseLike()
  {
    this.props.addLike(parseInt(this.refs.likeBox.innerHTML), this.props.statusIndex);
  }


  render() {
    return (
      <small>
        <a className="button" onClick={this.increseLike.bind(this)}>
          <i ref="likeBox">{this.props.likes}</i> Like
        </a>
        <a className="button"><i className="fa fa-pencil" /> Reply</a>
      </small>
    );
  }
}

export default Toolbar;
