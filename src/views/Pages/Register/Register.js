import React, { Component } from 'react';
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, Label, Row} from 'reactstrap';
import axios from 'axios'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  addUser = user => {
    const { members } = this.state
    members.push(user)
    this.setState({
      members
    })
  }

  onUserRegister = event => {
    event.preventDefault()

    axios.post('http://128.199.200.47:8088/api/v1/user/members', {
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
        this.addUser(response.data)
        console.log('Successfully Response: ', response)
      }).catch(error => {
        console.log(error)
      })
  }

  render() {
    const { username, password, full_name, phone, gender, address, religion, identity_card_number, identity_card_photo, blood_type, photo, public_photo, disease_history, born_place, born_date, body_height, body_weight, draw_length, club_id, satuan_id } = this.state

    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Card className="mx-4">
            <CardBody className="p-4">
              <Form name='form' onSubmit={this.onUserRegister}>
                <h1>Register</h1>
                <p className="text-muted">Create your account</p>

                {/* Row 1 */}
                <Row className="justify-content-center">
                  {/* Full Name */}
                  <Col>
                    <Label>Nama Lengkap</Label>
                    <InputGroup className="mb-3">
                      <Input type="text" name='full_name' value={full_name} onChange={this.handleChange} placeholder="Nama lengkap" />
                    </InputGroup>
                  </Col>

                  {/* Username */}
                  <Col>
                    <Label>Username</Label>
                    <InputGroup className="mb-3">
                      <Input type="text" name='username' value={username} onChange={this.handleChange} placeholder="Username" autoComplete="username" />
                    </InputGroup>
                  </Col>

                  {/* Password */}
                  <Col>
                    <Label>Password</Label>
                    <InputGroup className="mb-3">
                      <Input type="password" name='password' value={password} onChange={this.handleChange} placeholder="Password" autoComplete="new-password" />
                    </InputGroup>
                  </Col>
                </Row>

                {/* Row 2 */}
                <Row className="justify-content-center">
                  {/* Religion */}
                  <Col>
                    <Label>Agama</Label>
                    <InputGroup className='mb-3'>
                      <Input type='text' name='religion' value={religion} onChange={this.handleChange} placeholder='Agama' />
                    </InputGroup>
                  </Col>

                  {/* Gender */}
                  <Col>
                    <Label>Jenis Kelamin</Label>
                    <select name='gender' value={gender} className='form-control' onChange={this.handleChange}>
                      <option>---</option>
                      <option value='pria'>Pria</option>
                      <option value='wanita'>Wanita</option>
                    </select>
                  </Col>

                  {/* Born Place */}
                  <Col>
                    <Label>Tempat Lahir</Label>
                    <InputGroup className="mb-3">
                      <Input type="text" name='born_place' value={born_place} onChange={this.handleChange} placeholder="Tempat lahir" />
                    </InputGroup>
                  </Col>

                  {/* Born date */}
                  <Col>
                    <Label>Tanggal Lahir</Label>
                    <InputGroup className="mb-3">
                      <Input type="date" name='born_date' value={born_date} onChange={this.handleChange} />
                    </InputGroup>
                  </Col>
                </Row>

                {/* Row 3 */}
                <Row className="justify-content-center">
                  {/* Phone */}
                  <Col>
                    <Label>Nomor Hp</Label>
                    <InputGroup className="mb-3">
                      <Input type="text" name='phone' value={phone} onChange={this.handleChange} placeholder='Nomor hp' />
                    </InputGroup>
                  </Col>

                  {/* Body Height */}
                  <Col>
                    <Label>Tinggi Badan (cm)</Label>
                    <InputGroup className="mb-4">
                      <Input type="text" name='body_height' value={body_height} onChange={this.handleChange} placeholder='Tinggi badan' />
                    </InputGroup>
                  </Col>
                  {/* Body Weight */}
                  <Col>
                    <Label>Berat Badan (kg)</Label>
                    <InputGroup className="mb-4">
                      <Input type="text" name='body_weight' value={body_weight} onChange={this.handleChange} placeholder='Berat badan' />
                    </InputGroup>
                  </Col>
                  {/* Draw Length */}
                  <Col>
                    <Label>Panjang Tarikan (inch)</Label>
                    <InputGroup className="mb-4">
                      <Input type="text" name='draw_length' value={draw_length} onChange={this.handleChange} placeholder='Panjang tarikan busur' />
                    </InputGroup>
                  </Col>
                </Row>

                {/* Row 4 */}
                <Row className="justify-content-center">
                  {/* Identity Card Number */}
                  <Col>
                    <Label>NIK</Label>
                    <InputGroup className="mb-3">
                      <Input type="text" name='identity_card_number' value={identity_card_number} onChange={this.handleChange} placeholder='NIK' />
                    </InputGroup>
                  </Col>

                  {/* Identity Card Photo */}
                  <Col>
                    <Label>Foto KTP</Label>
                    <InputGroup className="mb-4">
                      <Input type="file" name='identity_card_photo' value={identity_card_photo} onChange={this.handleChange} />
                    </InputGroup>
                  </Col>

                  {/* Blood Type */}
                  <Col>
                    <Label>Golongan Darah</Label>
                    <select className='form-control' name='blood_type' value={blood_type} onChange={this.handleChange}>
                      <option>---</option>
                      <option value='A'>A</option>
                      <option value='B'>B</option>
                      <option value='AB'>AB</option>
                      <option value='O'>O</option>
                    </select>
                  </Col>

                  {/* Club */}
                  <Col>
                    <Label>Klub</Label>
                    <select className='form-control' name='club_id' value={club_id} onChange={this.handleChange}>
                      <option>Arrihu Archery</option>
                      <option>Al Badar</option>
                      <option>Sabash</option>
                    </select>
                  </Col>

                  {/* Satuan */}
                  <Col>
                    <Label>Satuan</Label>
                    <select className='form-control' name='satuan_id' value={satuan_id} onChange={this.handleChange}>
                      <option>---</option>
                      <option>Mataram</option>
                      <option>Lombok Tengah</option>
                    </select>
                  </Col>
                </Row>

                {/* Row 5 */}
                <Row className='justify-content-center'>
                  {/* Address */}
                  <Col>
                    <Label>Alamat</Label>
                    <InputGroup className="mb-3">
                      <Input type="textarea" name='address' value={address} onChange={this.handleChange} placeholder='Alamat' />
                    </InputGroup>
                  </Col>

                  {/* Disease Hostory */}
                  <Col>
                    <Label>Riwayat Penyakit</Label>
                    <InputGroup className="mb-3">
                      <Input type="textarea" name='disease_history' value={disease_history} onChange={this.handleChange} placeholder='Riwayat Penyakit' />
                    </InputGroup>
                  </Col>
                </Row>

                {/* Submit Button */}
                <Button color="success">Create Account</Button>
              </Form>
            </CardBody>
          </Card>
        </Container>
      </div>
    );
  }
}

export default Register;
