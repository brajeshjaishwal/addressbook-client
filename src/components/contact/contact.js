import React, { Component } from 'react'
import { List, Card, Button, Grid, Label } from 'semantic-ui-react';

class ContactComponent extends Component {
    onEdit = event => {
        event.preventDefault()
        console.log('contact component', this.props.contact)
        //this.props.history.push(`/editcontact/${this.props.contact._id}`)
        this.props.history.push({
            pathname: `/editcontact/${this.props.contact._id}`,
            state: { data: this.props.contact}
        })
    }
    onDelete = event => {
        event.preventDefault()
    }
    render() {
        let { id, name, email, phone, job, active } = this.props.contact
        return (
            <List.Item key={id} >
                <Card fluid>
                    <Card.Content>
                        <Card.Header >
                            {name}
                            <Label circular size='mini'
                                color={active ? 'green' : 'grey'} 
                                style={{marginLeft:'0.5em'}} content={job}/>
                        </Card.Header>
                        <Grid columns={2} >
                            <Grid.Row>
                                <Grid.Column textAlign='left'>
                                    
                                    <div>{email}</div>
                                    <div>{phone}</div>
                                </Grid.Column>
                                <Grid.Column textAlign='right'>
                                    <div>
                                        <Button icon='pencil' size='mini' circular color='yellow'
                                            onClick={this.onEdit} />
                                        <Button icon='delete' size='mini' circular 
                                            onClick={this.onDelete} />
                                    </div>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Card.Content>
                </Card>
            </List.Item>
        )
    }
}

export default ContactComponent