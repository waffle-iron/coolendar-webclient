import { Button, Card, Image } from 'semantic-ui-react'
import React from 'react'

class Event extends React.Component {
	render() {
		return (
				<Card fluid>
					<Card.Content>
						<Image floated='left' size='mini' src='http://semantic-ui.com/images/avatar/large/steve.jpg' />
						<Card.Header>
							Event Title
						</Card.Header>
						<Card.Meta>
							Event Location
						</Card.Meta>
						<Card.Description>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas a est eget consequat. Donec viverra mi lorem. 
						</Card.Description>
					</Card.Content>
					<Card.Content extra>
							<Button inverted size="mini" color='blue' floated="right">Share</Button>
							<Button inverted size="mini" color='green' floated="right">Detail</Button>
					</Card.Content>
				</Card>
			   );
	}
}

export default Event
