var express = require('express');
var router = express.Router();
var React = require('react');
var ReactServer = require('react-dom/server');
var Sidebar = require('../builds/components/sidebar.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
	var body = React.createElement(Sidebar);
	var html = ReactServer.renderToString(body);
	res.render('tests', { title: 'Express', bodyContent: html });
});

module.exports = router;
