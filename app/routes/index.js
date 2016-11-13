var express = require('express');
var router = express.Router();
var React = require('react');
var ReactServer = require('react-dom/server');
import {browserHistory, match, Router, RouterContext} from 'react-router';
import Routes from './react/index.jsx';

router.get('*', function(req, res, next) {
	var customProps = {};

	match({
		routes: (
			<Router history={browserHistory} >
				{Routes}
			</Router>
		),
		location: req.url
	}, function(error, redirectLocation, renderProps) {
		if (renderProps) {
			var html = ReactServer.renderToString(
				<RouterContext {...renderProps}
					createElement={function(Component, renderProps) {
						return <Component {...renderProps} {...customProps} />
					}} />
			);
			res.render('tests', { title: 'Express', bodyContent: html });
		} else {
			res.status(404).send('Not found');
		}
	});

});

module.exports = router;
