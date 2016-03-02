import React from 'react';

const Js = React.createClass({
  handleClick: function (i, props) {
    console.log('You clicked: ' + props.items[i]);
  },
  render: function() {
    return (
      <div>
        {
          //console.log(this.props.items)
          this.props.items.map((item, i)=>{
            return (
              <section className='section'>
                <div className="container">
                  <div onClick={this.handleClick.bind(this, i, this.props)} key={i}>{item}</div>
                </div>
              </section>
            );
          })
        }
      </div>
    );
  }
});

export default Js;
