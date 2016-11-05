import { Grid, Button, Header } from 'semantic-ui-react';
var React = require('react');
var SidebarWrapper = require('./sidebar/SidebarWrapper.jsx');

var Container = React.createClass({
	render: function() {
		return (
				<Grid columns={2} style={containerStyles}>
					<Grid.Row style={containerRowStyles}>
						<Grid.Column width={12} textAlign='center' verticalAlign='middle'>
							<Header as='h1' color='grey'>No content yet.</Header>
						</Grid.Column>
						<Grid.Column width={4} className='sidebar' style={sidebarStyles} >
							<SidebarWrapper />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			);
	}
});

var containerStyles = {
	position: 'absolute',
    width: '100%',
    height: '100%',
    padding: 0,
    margin: 0,
    overflow: 'auto'
}

var containerRowStyles = {
	padding: 0
}

var sidebarStyles = {
	padding: 0,
	backgroundColor: '#1C1C1C',
	height: '100%'
};

module.exports = Container;