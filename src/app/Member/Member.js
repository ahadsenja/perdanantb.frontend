import React from 'react'
import MemberForm from './MemberForm'
import MemberList from './MemberList'

class ProfilMember extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            members: [],
            showMemberForm: false
        }
    }

    handleMemberForm = () => {
        this.setState({
            showMemberForm: !this.state.showMemberForm
        })
    }

    render() {
        return (
            <div>
                {this.state.showMemberForm &&
                    <MemberForm />
                }
                {!this.state.showMemberForm &&
                    <MemberList />
                }
            </div>
        )
    }
}
export default ProfilMember