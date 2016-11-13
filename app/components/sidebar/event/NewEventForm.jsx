import { TextArea, Button, Form, Input, Message, Checkbox, Divider, Header } from 'semantic-ui-react'
import React from 'react'

class NewEventForm extends React.Component {
    render() {
	    return (
				<div>
					<Header as='h3' textAlign='center'>New Event</Header>
                    <Form >
                        <Form.Field>
                            <label>Title</label>
                            <input type="text" placeholder="Title" />
                        </Form.Field>
						<Form.Field>
                            <label>Description</label>
							<TextArea label="Description"></TextArea>
                        </Form.Field>
                        <Form.Field>
                            <label>Location</label>
                            <input type="text" placeholder="Title" />
                        </Form.Field>
                        <Form.Field>
                            <label>Start Date</label>
                            <input type="date" placeholder="Start Date" />
                        </Form.Field>
                        <Form.Field>
                            <label>End Date</label>
                            <input type="date" placeholder="End Date" />
                        </Form.Field>
                        <Message
                              error
                              content="Error message comes here"
                        />
                        <Button fluid type="submit" inverted color="blue">Save</Button>
                    </Form>
                </div>
		);
    }
}

export default NewEventForm
