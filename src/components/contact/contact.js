import React, { Component } from 'react'
import { List, Card, Button, Grid, Label } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { removeContactAction } from '../../actions/contact';
import { connect } from 'react-redux'
import { removeContactFromCachedItems } from '../../actions/group';

class ContactComponent extends Component {
    onEdit = event => {
        event.preventDefault()
        console.log('contact component', this.props.contact)
        this.props.history.push({
            pathname: `/editcontact/${this.props.contact._id}`,
            state: { data: this.props.contact}
        })
    }
    onDelete = async event => {
        event.preventDefault()
        await this.props.removeContact({contactid: this.props.contact._id})
        await this.props.removeItemFromGroup({ groupid: this.props.contact.group, 
                                                        contactid: this.props.contact._id })
    }
    render() {
        let { _id, name, email, phone, job, active } = this.props.contact
        //console.log('contact form', this.props.contact)
        return (
            <List.Item key={_id} >
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
                                        <Button icon='delete' size='mini' circular loading={this.props.loading === _id}
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

function mapStateToProps(state) {
    //console.log('mapstate to props', state.contact)
    return {
        //contact: state.contact.contact,
        loading: state.contact.loading,
        error: state.contact.error
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeContact: bindActionCreators(removeContactAction, dispatch),
        removeItemFromGroup: bindActionCreators(removeContactFromCachedItems, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)( ContactComponent)