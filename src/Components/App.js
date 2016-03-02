import React, {Component} from 'react';
import Header from './Header';
import Status from './Status';
import Comment from './Comment';
import './app.less';


let statuses = [
  {
    content: 'Lorem ipsum sdolor sit amet, consectetur adipisicing elit. Iure, at!',
    name: 'Parvez Akhter',
    profilePicture: 'http://placehold.it/100x100/fce473/fff/?text=Parvez',
    likes: 0,
    liked: 0,
    comments: [
      {
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, at!',
        name: 'Shams vai',
        profilePicture: 'http://placehold.it/100x100/fce473/fff/?text=Shams',
      },
      {
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, at!',
        name: 'Rafiq vai',
        profilePicture: 'http://placehold.it/100x100/fce473/fff/?text=Rafiq',
      },
    ]
  },

];


/**
 * this.state, this.props, this.refs
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statuses,
      user: {
        username: "shams",
        profilePicture: 'http://placehold.it/80x80'
      }
    };
  }

  renderStatus(status, index) {
    let {content, name, profilePicture, comments, likes, liked} = status;
    return (
      <div className='status-wrapper notification'>
        <Status content={content} name={name} profilePicture={profilePicture} liked={liked} likes={likes} toggleLike={this.toggleLike.bind(this)} statusIndex={index}/>
        <Comment comments={comments} statusIndex={index} addComment={this.addComment.bind(this)}/>
      </div>
    )
  }

  addComment(content, statusIndex){
    let comment = {
      content,
      name: this.state.user.username,
      profilePicture: this.state.user.profilePicture,
    };

    let statuses = this.state.statuses.slice();
    statuses[statusIndex].comments.push(comment);

    this.setState({statuses});
  }
  toggleLike(statusIndex){
    let statuses = this.state.statuses.slice();
    if(!statuses[statusIndex].liked)
    {
      statuses[statusIndex].liked = 1;
      statuses[statusIndex].likes++;
      this.setState({statuses});
    }else{
      statuses[statusIndex].liked = 0;
      statuses[statusIndex].likes--;
      this.setState({statuses});
    }
  }

  postStatus() {
    let comment = {
      content: this.refs.textarea.value,
      name: this.state.user.username,
      profilePicture: this.state.user.profilePicture,
      comments: [],
      likes: 0,
      liked: 0
    };

    //console.log(this.state.statuses.slice().concat([comment]) );

    this.setState({
      statuses: this.state.statuses.slice().concat([comment])
    });

    this.clearTextarea.call(this);
  }

  clearTextarea(){
    this.refs.textarea.value = "";
  }

  render() {
    let {statuses} = this.state;

    return (
      <div>
        <Header />

        <section className='section'>
          <div className="container">
            <h1 className="subtitle is-1">My New Status Box</h1>

            <div className="notification">
              <p className="control">
                <label className="label">Post your status</label>
                <textarea ref="textarea" className="textarea" placeholder="Textarea" />
              </p>
              <p className="control">
                <button className="button is-primary" onClick={this.postStatus.bind(this)}>Submit</button>
              </p>
            </div>

            {
              statuses.map(this.renderStatus.bind(this))
            }
          </div>

        </section>
      </div>
    );
  }
}

export default App;


// (Math.random()*10%5) * 500
