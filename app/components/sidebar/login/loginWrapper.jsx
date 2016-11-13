import { Button, Form, Input, Message, Checkbox, Divider, Header } from 'semantic-ui-react'
import React from 'react'

class loginWrapper extends React.Component {
    render() {
	    return (
				<div>
					<Header as='h3' textAlign='center'>Login</Header>
                    <Form >
                        <Form.Field>
                            <label>E-mail Address</label>
                            <input type="email" placeholder="E-mail Address" />
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input type="password" placeholder="Password" />
                        </Form.Field>
                        <Message
                              error
                              content='Invalid email or password !'
                        />
                        <Form.Field>
                            <Checkbox label="Remember me" />
                            <a style={{float:'right', marginRight:'10px'}} href="/preview/forgotPassword">Forgot Password</a>
                        </Form.Field>
                        <Button fluid type="submit" inverted color="blue">Login</Button>
                        <Divider horizontal> Or </Divider>
                        <Button fluid inverted color="green">Sign Up</Button>
                    </Form>
                </div>
		);
    }
}

export default loginWrapper
