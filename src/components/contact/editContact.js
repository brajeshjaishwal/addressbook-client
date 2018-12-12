import React, {Component} from 'react'
import { Input, Button, Modal, Divider, Checkbox, Header, Select } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import validator from 'validator'
import { addContactAction, editContactAction } from '../../actions/contact';

class EditContactComponent extends Component {
    constructor(props){
        super(props)
        let contact = {} 
        if(this.props.match.params.id) {
            contact = { ...this.props.location.state.data}
            //trim domain from email
            contact.email = contact.email.replace(this.props.domain, '')
        }

        this.state = {
            id: this.props.match.params.id,
            name: contact.name,
            job: contact.job,
            phone: contact.phone,
            email: contact.email,
            group: contact.group ,
            groupname: contact.groupname,
            groupoptions: [],
            active: contact.active || true,
            open: true,
        }
    }

    async componentDidMount() {
        let groups = this.props.groups || []
        let options = []
        
        if(groups.length > 0) {
            let defaultGroup = ''
            groups.forEach(g => {
                options.push({key: g.id, text: g.name, value: g.name})
            })
            if(this.state.id) {
                //we are editing existing contact
                defaultGroup = this.state.groupname
            } else {
                defaultGroup = options[0].text
            }
            this.setState({group: defaultGroup})
        }
        this.setState({groupoptions: options})
        if(this.state.id) {
            //fetch cached contact detail
        }
    }

    onSelectionChange = ({name, value}) => {
        this.setState({[name]: value})
    }

    onChangeHandler = (e) => {
        let tempValue = e.target.value
        this.setState({[e.target.name]: tempValue})
        if(e.target.name === 'email') {
            let tempEmail = tempValue + this.props.domain
            let error = ''
            if(tempValue && !validator.isEmail(tempEmail)) {
                error = 'Email not valid'
            }
            this.setState({emailError: error})
        } else if(e.target.name === 'phone') {
            let error = ''
            if(tempValue && (!validator.isNumeric(tempValue) || tempValue.length < 10)) {
                error = 'phone number not valid'
            }
            this.setState({phoneError: error})
        } else if(e.target.name === 'name') {
            let error = ''
            if(tempValue === null || tempValue === undefined || tempValue === '') {
                error = 'name is required field'
            }
            this.setState({nameError: error})
        }
    }

    onSubmitHandler = async (event) => {
        event.preventDefault()
        this.setState({open: false})
        let { id, name, phone, email, job, group, active, groupoptions } = this.state
        let groupid = groupoptions.find(o => o.text === group).key
        this.state.id ? 
            await this.props.editContact({id, name, phone, email, job, group: groupid, active}) :
            await this.props.addContact({ name, phone, email, job, group:groupid, active})
        this.props.history.push('/dashboard')
    }

    onExit = event => {
        event.preventDefault()
        this.setState({open: false})
        this.props.history.push('/dashboard')
    }

    onCheckedChange = (name) => {
        this.setState({[name]: !this.state[name]})
    }

    render() {
        
        return (
            <Modal size='mini' open={this.state.open} closeOnEscape={true} closeOnDimmerClick={true}>
                <Header color='orange' style={{background:'orange'}}>Contact Information</Header>
                <Modal.Content>
                    <Input name="name" fluid placeholder='Enter name' style={{marginTop: '0.5em'}}
                        value = {this.state.name}
                        onChange={this.onChangeHandler} icon='user' iconPosition='left' />
                    { this.state.nameError && <span style={{color:'red'}}>{this.state.nameError}</span>}

                    <Input name="email" fluid placeholder='Enter email' style={{marginTop: '0.5em'}}
                        value = {this.state.email}
                        onChange={this.onChangeHandler} icon='at' iconPosition='left' 
                        label='@inmar.com' labelPosition='right' />
                    { this.state.emailError && <span style={{color:'red'}}>{this.state.emailError}</span>}                        
                    <Input name="phone" fluid placeholder='Enter phone' style={{marginTop: '0.5em'}}
                        value = {this.state.phone}
                        onChange={this.onChangeHandler} icon='phone' iconPosition='left' />
                    { this.state.phoneError && <span style={{color:'red'}}>{this.state.phoneError}</span>}

                    {<Input name="job" fluid placeholder='Enter job role' style={{marginTop: '0.5em'}}
                        value = {this.state.job}
                        onChange={this.onChangeHandler} icon='info' iconPosition='left' />
                    }

                    <Input fluid style={{marginTop:'0.5em'}} onChange={this.onChangeHandler}>
                        <Select name = 'group' compact fluid options={this.state.groupoptions || []} selection
                            value = { this.state.group }
                            onChange={event => this.onSelectionChange({name: 'group', value: event.target.textContent })} />
                        <Button disabled>Group</Button>
                    </Input>

                    {   
                        //display active/inactive checkbox when editing existing contact
                        this.state.id && 
                        <Checkbox name = 'active' toggle style={{marginTop:'1em'}}
                            label={ this.state.active ? 'deactivate' : 'activate'}
                            checked = { this.state.active }
                            onChange={ e => this.onCheckedChange('active')} />
                    }

                    {//display error information
                        this.props.error && <span style={{color:'red'}}>{this.props.error}</span>
                    }
                    <Divider></Divider>
                    <Button.Group>
                        <Button name='Save' primary 
                            onClick = {this.onSubmitHandler}
                            loading= { this.props.loading } icon='save' content='' circular compact></Button>
                        <Button.Or />
                        <Button name='Cancel' secondary onClick = {this.onExit} icon='cancel' content='' circular compact></Button>
                    </Button.Group>
                </Modal.Content>
            </Modal>
        )
    }
}

function mapStateToPrps(state) {
    console.log('editContact', state)
    return {
        domain: state.auth.domain,
        contact: state.currentContact,
        groups: state.group.groups,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        addContact: bindActionCreators(addContactAction, dispatch),
        editContact: bindActionCreators(editContactAction, dispatch)
    }
}

export default connect(mapStateToPrps, mapDispatchToProps)(EditContactComponent)