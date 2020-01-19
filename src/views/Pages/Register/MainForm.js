import React from 'react'
import axios from "axios";

import PersonalInformation from "./PersonalInformation";
import IdentityDetail from "./IdentityDetail";
import PhysicInformation from "./PhysicInformation";
import AccountInformation from "./AccountInformation";
import Confirmation from "./Confirmation"
import Success from "./Success"


class MainForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      id: '',
      full_name: '',
      username: '',
      password: '',
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
    }
  }

  nextStep = () => {
    const { step } = this.state
    this.setState({
      step: step + 1
    })
  };

  prevStep = () => {
    const { step } = this.state
    this.setState({
      step: step - 1
    })
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  addMember = member => {
    const { members } = this.state;
    members.push(member);
    this.setState({
      members
    });
  };

  onRegister = event => {
    event.preventDefault()

    axios.post('http://128.199.200.47:8088/api/v1/user/register', {
      full_name: this.state.full_name,
      username: this.state.username,
      password: this.state.password,
      phone: this.state.phone,
      gender: this.state.gender,
      born_place: this.state.born_place,
      born_date: this.state.born_date,
      address: this.state.address,
      religion: this.state.religion,
      identity_card_number: this.state.identity_card_number,
      identity_card_photo: this.state.identity_card_photo,
      blood_type: this.state.blood_type,
      disease_history: this.state.disease_history,
      body_height: this.state.body_height,
      body_weight: this.state.body_weight,
      draw_length: this.state.draw_length,
      club_id: this.state.club_id,
      satuan_id: this.state.satuan_id
    })
      .then(response => response.data)
      .then(response => {
        this.addMember(response.data);
        console.log('Successfully Response: ', response);
      }).catch(error => {
      console.log(error);
    });
  };

  render() {
    const { step } = this.state;
    const { full_name, username, password, phone, gender, born_place, born_date, address, religion,
      identity_card_number, identity_card_photo, blood_type, disease_history, photo, public_photo, body_height,
      body_weight, draw_length, date_register, club_id, satuan_id } = this.state;
    const values = { full_name, username, password, phone, gender, born_place, born_date, address, religion,
      identity_card_number, identity_card_photo, blood_type, disease_history, photo, public_photo, body_height,
      body_weight, draw_length, date_register, club_id, satuan_id  };

    switch (step) {
      case 1:
        return <AccountInformation
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={ values }
                />;
      case 2:
        return <PersonalInformation
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={ values }
                />;
      case 3:
        return <IdentityDetail
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                handleFileChange={this.handleFileChange}
                values={ values }
                />;
      case 4:
        return <PhysicInformation
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={ values }
                />;
      case 5:
        return <Confirmation
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                onRegister={this.onRegister}
                values={ values }
                />;
      case 6:
        return <Success />;
      default:
    }

    return (
      <div>

      </div>
    )
  }
}
export default MainForm;
