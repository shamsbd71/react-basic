import React, {Component, PropTypes} from 'react';
import Toolbar from '../Toolbar';
import ProfilePicture from './ProfilePicture';
import Name from './Name';
import StatusContent from './StatusContent';
import Comment from '../Comment';

class Status extends Component {
  render() {
    return (
      <div className="notification is-primary">
        <article className="media">
          <ProfilePicture img={this.props.profilePicture}/>

          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.name}</strong>
                <article>{this.props.content}</article>
                <Toolbar liked={this.props.liked} likes={this.props.likes} toggleLike={this.props.toggleLike} statusIndex={this.props.statusIndex}/>
              </p>
            </div>
          </div>

        </article>
      </div>
    );
  }
}

Status.propTypes = {
  content: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  profilePicture: PropTypes.string.isRequired
};

export default Status;
