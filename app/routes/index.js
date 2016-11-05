var express = require('express');
var router = express.Router();
var React = require('react');
var ReactServer = require('react-dom/server');
var Container = require('../components/Container.jsx');

/* GET home page. */
router.get('/', function(req, res, next) {
	var body = React.createElement(Container);
	var html = ReactServer.renderToString(body);
	res.render('tests', { title: 'Express', bodyContent: html });
  	//res.render('index', { title: 'Express' });
});

module.exports = router;
