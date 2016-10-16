React = require 'react'

{ h1 } = React.DOM

Banner = React.createClass
	render: ->
		h1 { className: "banners" }, this.props.title

module.exports = Banner