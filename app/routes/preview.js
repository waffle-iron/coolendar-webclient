var express = require('express');
var router = express.Router();
var React = require('react');
var ReactServer = require('react-dom/server');

var suryaComponents = require('../utils/component-previews/surya');
var luthfieComponents = require('../utils/component-previews/luthfie');

var components = {};
var elements = {};

for (let name in suryaComponents) {
	components[name] = suryaComponents[name];
}

for (let name in luthfieComponents) {
	components[name] = luthfieComponents[name];
}

for (let name in components) {
	elements[name] = require(components[name].file);
    if (typeof(elements[name].default !== 'undefined'))
        elements[name] = elements[name].default;
	router.get('/' + name, function(req, res, next) {
		var body = React.createElement(elements[name]);
		var html = ReactServer.renderToString(body);
		res.render('tests', { title: 'Coolendar | Component Preview', bodyContent: html });
	});
}

router.get('/', function(req, res, next) {
	res.render('tests', { title: 'Express', bodyContent: 'components preview'});
});
	
module.exports = router;
