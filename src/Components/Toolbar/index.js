import React, {Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

//ref1
{
  statuses: []
}

//ref1
{
  statues: [{id:1, content: "asdf"}]
}

if(JSON.stringify(statues) === JSON.stringify(statuses)){

}

class Toolbar extends Component {
  //onClick={this.addLike.bind(this)}
  toggleLike()
  {
    this.props.toggleLike(this.props.statusIndex);
  }

  shouldComponentUpdate: shouldPureComponentUpdate;

  render() {
    console.log('Re-rendering toolbar...');

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
