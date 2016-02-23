import React, {Component} from 'react';

class Toolbar extends Component {
  render() {
    return (
      <small><a className="button">
        <i className="fa fa-pencil" /> Like</a>
        <a className="button"><i className="fa fa-pencil" /> Reply</a>
      </small>
    );
  }
}

export default Toolbar;
