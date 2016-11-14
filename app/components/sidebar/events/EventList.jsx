import { Button, Card } from 'semantic-ui-react'
import React from 'react'
import Event from './Event'

class EventList extends React.Component {
	render() {
		var events = [];
		var eventPerRow = 1;
		for(var i=0;i<3;i++) {
			events.push(<Event />);
		}
		return (
			<Card.Group itemsPerRow={eventPerRow}>
				{events}
			</Card.Group>
		);
	}
}

export default EventList
