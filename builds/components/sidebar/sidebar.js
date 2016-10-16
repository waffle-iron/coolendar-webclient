var Banner, Jumbotron, React, a, div, h1, p, ref;

React = require('react');

Banner = require('./banner');

ref = React.DOM, div = ref.div, h1 = ref.h1, p = ref.p, a = ref.a;

Jumbotron = React.createClass({
  render: function() {
    return div({
      className: "jumbotron"
    }, div({
      className: "container"
    }, h1({}, "Hello World"), p({}, React.createElement(Banner, {
      title: "hallo ganteng"
    }))));
  }
});

module.exports = Jumbotron;
