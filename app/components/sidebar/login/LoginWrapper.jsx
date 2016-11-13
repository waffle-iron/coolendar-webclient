import { Button, Form, Input, Message, Checkbox, Divider, Header } from 'semantic-ui-react'
import React from 'react'
import { Link } from 'react-router'

class LoginWrapper extends React.Component {
    render() {
	    return (
				<div>
					<Header as='h3' textAlign='center'>Login</Header>
                    <Form size='small' key='small'>
                        <Form.Field>
                            <input type="email" placeholder="E-mail Address" />
                        </Form.Field>
                        <Form.Field>
                            <input type="password" placeholder="Password" />
                        </Form.Field>
                        <Message
                              error
                              content='Invalid email or password !'
                        />
                        <Form.Field>
                            <label>&nbsp;</label>
                            <Checkbox label="Remember me" />
                            <Link style={forgotPasswordStyles} to='/user/reset-password'>Forgot Password</Link>
                        </Form.Field>
                        <Form.Field>
                            <label>&nbsp;</label>
                            <Button fluid type="submit" inverted color="blue">Login</Button>
                        </Form.Field>
                        <Form.Field>
                            <label>&nbsp;</label>
                            <Link className='ui green fluid inverted button' to='/user/register'>
                                New in coolendar? Sign Up Now
                            </Link>
                        </Form.Field>
                    </Form>
                </div>
		);
    }
}

var forgotPasswordStyles = {
    color: '#4C4C4C',
    float:'right', 
    marginRight:'10px'
}

export default LoginWrapper
