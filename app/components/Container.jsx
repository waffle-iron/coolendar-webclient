import { Grid, Button } from 'semantic-ui-react';
var React = require('react');

var Container = React.createClass({
	render: function() {
		return (
				<Grid columns={2}>
					<Grid.Row>
						<Grid.Column width={12}>
							<Button primary>Primary</Button>
						</Grid.Column>
						<Grid.Column width={4}>
							asdasd
						</Grid.Column>
					</Grid.Row>
				</Grid>
			);
	}
});

module.exports = Container;