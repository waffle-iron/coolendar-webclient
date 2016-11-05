import { Button, Form, Checkbox } from 'semantic-ui-react';
var React = require('react');

var Wrapper = React.createClass({
	render: function() {
		return (
				<Form>
					<Form.Field>
						<label>First Name</label>
						<input placeholder="First Name" />
					</Form.Field>
					<Form.Field>
						<label>Last Name</label>
						<input placeholder="Last Name" />
					</Form.Field>
					<Form.Field>
						<label>E-mail Address</label>
						<input placeholder="E-mail Address" />
					</Form.Field>
					<Form.Field>
						<label>Password</label>
						<input type="password" placeholder="Password" />
					</Form.Field>
					<Form.Field>
						<label>Confirm Password</label>
						<input type="password" placeholder="Confirm Password" />
					</Form.Field>
					<Form.Field>
						<Checkbox label="I aggree to the Terms and Conditions" />
					</Form.Field>
					<Button type="submit">Submit</Button>
				</Form>
			);
	}
});

module.exports = Wrapper;