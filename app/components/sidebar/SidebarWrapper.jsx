import { Menu, Icon } from 'semantic-ui-react';
import React from 'react';
import { Link } from 'react-router';

class SidebarWrapper extends React.Component {
	render() {
		return (
				<div>
					<div className='sidebar-menu'>
						<Menu pointing secondary inverted>
							<Link className='item' activeClassName='active' to='/'>
								<Icon name='wait' />
							</Link>
							<Link className='item' activeClassName='active' to='/user'>
								<Icon name='user' />
							</Link>
						</Menu>
					</div>
					<div className='sidebar-content' style={sidebarContentStyles}>
						{this.props.children}
					</div>
				</div>
			);
	}
}

var sidebarContentStyles = {
	padding: '6.5%',
	width: '100%'
}

export default SidebarWrapper;