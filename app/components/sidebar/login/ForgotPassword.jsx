import { Button, Form, Input, Message, Checkbox, Divider, Header } from 'semantic-ui-react'
import React from 'react'
import { Link } from 'react-router'

class ForgotPassword extends React.Component {
    render() {
	    return (
				<div>
					<Header as='h3' textAlign='center'>Forgot Password</Header>
                    <Form size='small' key='small'>
                        <Form.Field>
                            <input type="email" placeholder="E-mail Address" />
                        </Form.Field>
                        <Message
                              error
                              content="Sorry, we don't recognize that email address"
                        />

                        <Form.Field>
                            <Button fluid type="submit" inverted color="red">Reset Password</Button>
                        </Form.Field>
                        <Form.Field>
                            <label>&nbsp;</label>
                            <Header as='h5' textAlign='center'>Change your mind?</Header>
                            <Button.Group widths='2'>
                                <Link className='ui blue fluid inverted button' to='/user/login'>
                                    Sign In
                                </Link>
                                <Link className='ui green fluid inverted button' to='/user/register'>
                                    Sign Up
                                </Link>
                            </Button.Group>
                        </Form.Field>
                    </Form>
                </div>
		);
    }
}

export default ForgotPassword
