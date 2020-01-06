import React from 'react'
import axios from 'axios'
import MemberForm from './MemberForm'
import MemberList from './MemberList'

class ProfilMember extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            members: [],
            showMemberForm: false
        }
    }

    componentDidMount() {
        this.listMembers()
    }

    toggleMemberForm = () => {
        this.setState({
            showMemberForm: !this.state.showMemberForm
        })
    }

    listMembers = () => {
        let token = JSON.parse(localStorage.getItem('token'))
        axios.get('http://128.199.200.47:8088/api/v1/user/members', {
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : `Token ${token}`
            }
        }).then(response => {
            this.setState({ members: response.data })
            console.log('response from member: ', response.data[0])
        })
    }

    render() {
        return (
            <div>
                {this.state.showMemberForm &&
                    <MemberForm 
                        toggleMemberForm={this.toggleMemberForm}
                    />
                }
                {!this.state.showMemberForm &&
                    <MemberList 
                        dataState={this.state}
                        toggleMemberForm={this.toggleMemberForm}
                    />
                }
            </div>
        )
    }
}
export default ProfilMember