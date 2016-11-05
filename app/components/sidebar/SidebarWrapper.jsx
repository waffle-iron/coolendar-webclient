import { Menu, Icon } from 'semantic-ui-react';
var React = require('react');
var RegistrationWrapper = require('./registration/RegistrationWrapper.jsx');

var SidebarWrapper = React.createClass({
	render: function() {
		return (
				<div>
					<div className='sidebar-menu'>
						<Menu pointing secondary inverted>
							<Menu.Item name='timeline' active={true}>
								<Icon name='wait' />
							</Menu.Item>
							<Menu.Item name='user'>
								<Icon name='user' />
							</Menu.Item>
						</Menu>
					</div>
					<div className='sidebar-content' style={sidebarContentStyles}>
						<RegistrationWrapper />
					</div>
				</div>
			);
	}
});

var sidebarContentStyles = {
	padding: '6.5%',
	width: '100%'
}

module.exports = SidebarWrapper;