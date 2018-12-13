import React, { Component } from 'react'
import { List, Segment, Header, Grid, Input, Icon, Select, Button, Pagination } from 'semantic-ui-react';
import ContactComponent from './contact';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { fetchCachedGroupItemsAction } from '../../actions/group'

class ContactContainerComponent extends Component {
    state = {
        activePage: 1,
        totalPages: 5,
        searchString: '',
        searchBy: 'name',
        sortBy: 'name',
        dosort: '',
        dosearch: '',
        sortOptions: [  { key: 'none', text: 'none', value: 'none' },
                    { key: 'name', text: 'name', value: 'name' },
                    { key: 'email', text: 'email', value: 'email' },],
        searchOptions: [  { key: 'name', text: 'name', value: 'name' },
                    { key: 'email', text: 'email', value: 'email' }, ],
        pagesize: '3',
        pageSizeOptions: [
                        { key: '3', text: '3', value: '3' },
                        { key: '5', text: '5', value: '5' },
                        { key: '10', text: '10', value: '10' },
                        { key: '15', text: '15', value: '15' },
                        { key: '20', text: '20', value: '20' }, ]
    }

    handlePaginationChange = (e, { activePage }) => {
        console.log('active page', activePage)
        this.setState({ activePage })
    }

    onSearch = () => {
        this.setState({dosearch: true})
    }

    onSort = () => {
        this.setState({dosort: true})
    }

    onChangeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSelectionChange = (name, value) => {
        this.setState({[name]: value})
    }
    async componentDidMount() {
        console.log('component did mount - contact container')
        let groupid = this.props.match.params.group || '00000'
        await this.props.fetchAllGroups({groupid})
    }
    render() {
        let selectedGroup = this.props.selectedGroup// this.props.match.params.group || 'All Contacts'
        let contactList = null
        let groupname = ''
        let pageCount = 1
        if(selectedGroup) {
            contactList = [...selectedGroup.contacts]
            groupname = selectedGroup.name
        }
        if(this.state.searchString && contactList !== null && contactList.length > 1) {
            let ss = this.state.searchString.toUpperCase()
            if(this.state.searchBy === 'name') {
                contactList = contactList.filter(c => c.name.toUpperCase().includes(ss))
            } else if(this.state.searchBy === 'email') {
                contactList = contactList.filter(c => c.email.toUpperCase().includes(ss))
            } 
        }
        if(this.state.sortBy !== 'none' && contactList !== null && contactList.length > 1) {
            if(this.state.sortBy === 'name') {
                contactList = contactList.sort(function(a, b){
                    if(a.name < b.name) { return -1; }
                    if(a.name > b.name) { return 1; }
                    return 0;
                })
            } else if(this.state.sortBy === 'email') {
                contactList = contactList.sort(function(a, b){
                    if(a.email < b.email) { return -1; }
                    if(a.email > b.email) { return 1; }
                    return 0;
                })
            }
        }
        if(contactList) {
            let ps = parseInt(this.state.pagesize)
            let totalPages = Math.ceil(contactList.length / ps)
            if(contactList.length > totalPages * ps)
            {
                //we will need one more page
                totalPages += 1
            }
            pageCount = totalPages
            let pn = this.state.activePage
            let startIndex = (pn - 1) * ps
            let endIndex = pn * ps
            contactList = contactList.slice(startIndex, endIndex)
        }
        return (
            <div>
                <Segment>
                    <Grid columns={3}>
                        <Grid.Column width={4}>
                            <Header color='yellow' >
                                <Icon name='address card' />
                                <Header.Content>{groupname}</Header.Content>
                            </Header>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Input type='text' placeholder='Search ...'>
                                <input name='searchString' onChange={this.onChangeHandler}/>
                                <Select compact options={this.state.searchOptions} 
                                    defaultValue='name' 
                                    onChange={e => this.onSelectionChange('searchBy', e.target.textContent)}/>
                                {
                                //<Button icon='search' compact onClick={this.onSearch}/>
                                }
                            </Input>
                        </Grid.Column>
                        <Grid.Column width={3} align='right'>
                            <Input >
                                <Select compact options={this.state.sortOptions} 
                                    defaultValue='none' 
                                    onChange={e => this.onSelectionChange('sortBy', e.target.textContent)}/>
                                <Button disabled compact icon='sort' onClick={this.onSort}/>
                            </Input>
                        </Grid.Column>
                    </Grid>
                    {   contactList && 
                        <List selection> 
                            { 
                                contactList.map(c => <ContactComponent key={c.email} contact={c} {...this.props}/>)
                            }
                        </List>
                    }
                    
                </Segment>
                <Segment>
                    <Pagination pointing secondary
                        activePage={this.state.activePage}
                        onPageChange={this.handlePaginationChange}
                        totalPages={pageCount}
                    />
                    <Input>
                        <Select name='pagesize' compact
                            style={{marginLeft:'1em'}} 
                            options={this.state.pageSizeOptions} 
                            defaultValue={this.state.pagesize}
                            onChange={e => this.onSelectionChange('pagesize', e.target.textContent)}/>
                        <Button disabled>Page Size</Button>
                    </Input>
                </Segment>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        deletedContact: state.contact.deletedContact,
        selectedGroup: state.group.selectedGroup,
        error: state.group.error
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchAllGroups: bindActionCreators(fetchCachedGroupItemsAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactContainerComponent)