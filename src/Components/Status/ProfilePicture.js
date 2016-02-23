import React, {Component, PropTypes} from 'react';

class ProfilePicture extends Component {
  render() {
    return (
      <figure className="media-left">
        <p className="image is-64x64">
          <img src={this.props.img}/>
        </p>
      </figure>
    );
  }
}

ProfilePicture.propTypes = {
  img: PropTypes.string.isRequired
};

export default ProfilePicture;
