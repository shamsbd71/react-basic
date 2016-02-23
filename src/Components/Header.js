import React, {Component} from 'react';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="header-left">
            <a className="header-item" href="#">
              React
            </a>
          </div>
			    <span className="header-toggle">
			      <span></span>
			      <span></span>
			      <span></span>
			    </span>
          <div className="header-right header-menu">
			      <span className="header-item">
			        <a className="button" href="#">Login</a>
			      </span>
          </div>
        </div>
      </header>
    );
  }
}
;

export default Header;
