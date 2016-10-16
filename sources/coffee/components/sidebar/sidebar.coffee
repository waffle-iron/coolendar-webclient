React = require 'react'
Banner = require './banner'

{ div, h1, p, a } = React.DOM

Jumbotron = React.createClass
  render: ->
    div className: "jumbotron",
      div className: "container",
        h1 {}, "Hello World"
        	p {},
        	React.createElement Banner, {title: "hallo ganteng"}

module.exports = Jumbotron