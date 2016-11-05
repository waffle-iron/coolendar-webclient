import { Button, Form, Checkbox, Header } from 'semantic-ui-react';
var React = require('react');

var RegistrationWrapper = React.createClass({
	render: function() {
		return (
				<div>
					<Header as='h3' textAlign='center'>Registration</Header>
					<Form size='small' key='small'>
						<Form.Field>
							<input type='text' placeholder='First Name' />
						</Form.Field>
						<Form.Field>
							<input type='text' placeholder='Last Name' />
						</Form.Field>
						<Form.Field>
							<input type='text' placeholder='E-mail Address' />
						</Form.Field>
						<Form.Field>
							<input type='password' placeholder='Password' />
						</Form.Field>
						<Form.Field>
							<input type='password' placeholder='Confirm Password' />
						</Form.Field>
						<Form.Field>
							<label>&nbsp;</label>
							<Button inverted fluid color='violet' type='submit'>Submit</Button>
						</Form.Field>
					</Form>
				</div>
			);
	}
});

module.exports = RegistrationWrapper;