import { Grid, Button, Header } from 'semantic-ui-react';
import React from 'react';
import SidebarWrapper from './sidebar/SidebarWrapper.jsx';

class Container extends React.Component {
	render() {
		return (
				<Grid columns={2} style={containerStyles}>
					<Grid.Row style={containerRowStyles}>
						<Grid.Column width={12} textAlign='center' verticalAlign='middle'>
							<Header as='h1' color='grey'>No content yet.</Header>
						</Grid.Column>
						<Grid.Column width={4} className='sidebar' style={sidebarStyles} >
							{this.props.children}
						</Grid.Column>
					</Grid.Row>
				</Grid>
			);
	}
};

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

export default Container;