import { Button, Form, Checkbox, Header } from 'semantic-ui-react';
import React from 'react';
import { Link } from 'react-router';

class RegistrationWrapper extends React.Component {
	render() {
		return (
				<div>
					<Header as='h3' textAlign='center'>Sign Up</Header>
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
							<Button inverted fluid color='green' type='submit'>Sign Up Now!</Button>
						</Form.Field>
						<Form.Field>
							<label>&nbsp;</label>
							<Link className='ui blue fluid inverted button' to='/user/login'>
                                Already have account? Sign In
                            </Link>
						</Form.Field>
					</Form>
				</div>
			);
	}
}

export default RegistrationWrapper;
