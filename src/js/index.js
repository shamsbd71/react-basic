import React from 'react';
var Todo = React.createClass({
  render: function() {
    return <div onClick={this.props.onClick}>{this.props.title}</div>;
  },

  //this component will be accessed by the parent through the `ref` attribute
  animate: function() {
    console.log('Pretend %s is animating', this.props.title);
  }
});

var Js = React.createClass({
  getInitialState: function() {
    return {items: ['Apple', 'Banana', 'Cranberry']};
  },

  handleClick: function(index) {
    var items = this.state.items.filter(function(item, i) {
      return index !== i;
    });
    this.setState({items: items}, function() {
      if (items.length === 1) {
        this.refs.item0.animate();
      }
    }.bind(this));
  },

  render: function() {
    return (
      <div>
        {this.state.items.map(function(item, i) {
          var boundClick = this.handleClick.bind(this, i);
          return (
            <Todo onClick={boundClick} key={i} title={item} ref={'item' + i} />
          );
        }, this)}
      </div>
    );
  }
});

export default Js;
