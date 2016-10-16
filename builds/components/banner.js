var Banner, React, h1;

React = require('react');

h1 = React.DOM.h1;

Banner = React.createClass({
  render: function() {
    return h1({
      className: "banners"
    }, this.props.title);
  }
});

module.exports = Banner;
