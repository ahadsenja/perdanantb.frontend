import React from 'react'
import axios from 'axios'
import MemberList from './MemberList'
import MainForm from "../../views/Pages/Register/MainForm";

class ProfilMember extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false,
      showMemberForm: false,
      mode: 'add',
      id: '',
      username: '',
      password: '',
      full_name: '',
      phone: '',
      gender: '',
      born_place: '',
      born_date: '',
      address: '',
      religion: '',
      identity_card_number: '',
      identity_card_photo: null,
      blood_type: '',
      disease_history: '',
      photo: null,
      public_photo: null,
      body_height: '',
      body_weight: '',
      draw_length: '',
      date_register: null,
      club_id: 0,
      satuan_id: 0,
      members: []
    }
  }

  componentDidMount() {
    this.listMembers()
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  toggleMemberForm = () => {
    this.setState({
        showMemberForm: !this.state.showMemberForm
    })
  }

  selectMember = member => {
    this.setState({
      id: member.id,
      full_name: member.full_name,
      phone: member.phone,
      gender: member.gender,
      born_place: member.born_place,
      born_date: member.born_date,
      address: member.address,
      identity_card_number: member.identity_card_number,
      blood_type: member.blood_type,
      disease_history: member.disease_history,
      body_height: member.body_height,
      body_weight: member.body_weight,
      draw_length: member.draw_length,
      date_register: member.date_register,
      club_id: member.club_id,
      satuan_id: member.satuan_id,
      mode: 'update'
    })

    this.toggleMemberForm()
  }

  updateMember = member => {
    const { members } = member
    let index = members.findIndex((data) => data.id === member.id)
    members[index] = member
    this.setState({
      members
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

  onUpdateMember = event => {
    event.preventDefault()
    const member = {
      id: this.state.id,
      full_name: this.state.full_name,
      phone: this.state.phone,
      gender: this.state.gender,
      born_place: this.state.born_place,
      born_date: this.state.born_date,
      address: this.state.address,
      identity_card_number: this.state.identity_card_number,
      blood_type: this.state.blood_type,
      disease_history: this.state.disease_history,
      body_height: this.state.body_height,
      body_weight: this.state.body_weight,
      draw_length: this.state.draw_length,
      date_register: this.state.date_register,
      club_id: this.state.club_id,
      satuan_id: this.state.satuan_id,
    }
    axios.post('http://128.199.200.47:8088/api/v1/user/profile/change', member)
      .then(response => response.data)
      .then(response => this.updateMember(response.data))

    this.toggleMemberForm()
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
      return (
          <div>
              {this.state.showMemberForm &&
                  <MainForm
                    dataState={this.state}
                    toggleMemberForm={this.toggleMemberForm}
                    onUpdateMember={this.onUpdateMember}
                    handleChange={this.handleChange}
                  />
              }
              {!this.state.showMemberForm &&
                  <MemberList
                    dataState={this.state}
                    toggleMemberForm={this.toggleMemberForm}
                    selectMember={this.selectMember}
                  />
              }
          </div>
      )
  }
}
export default ProfilMember
