import React from 'react';

const Js = React.createClass({
  render() {
    return (
      <div>
        {props.items.map(function(item, i) {
          return (
            <div onClick={handleClick.bind(this, i, props)} key={i}>{item}</div>
          );
        })}
      </div>
    );
  }
});

export default Js;
