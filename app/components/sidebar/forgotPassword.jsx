import { Button, Form, Input, Message, Checkbox, Divider, Header } from 'semantic-ui-react'
import React from 'react'

class forgotPassword extends React.Component {
    render() {
	    return (
				<div>
					<Header as='h3' textAlign='center'>Forgot Password</Header>
                    <Form >
                        <Form.Field>
                            <label>E-mail Address</label>
                            <input type="email" placeholder="E-mail Address" />
                        </Form.Field>
                        <Message
                              error
                              content="Sorry, we don't recognize that email address"
                        />
                        <Button fluid type="submit" inverted color="blue">Continue</Button>
                    </Form>
                </div>
		);
    }
}

export default forgotPassword
