import React from "react";
import { Col, Form, Input, InputGroup, Label, Row, Button } from 'reactstrap'

class PersonalInformation extends React.Component{

  saveAndContinue = (event) => {
    event.preventDefault();
    this.props.nextStep();
  };

  back = (event) => {
    event.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values } = this.props;

    return (
      <div>
        <h1>Personal Information</h1>
        <br />

        <Form>
          <Row className="justify-content-center">
            <Col>
              <Label>Jenis Kelamin</Label>
              <select name='gender' value={values.gender} className='form-control' onChange={this.props.handleChange}>
                <option>---</option>
                <option value='pria'>Pria</option>
                <option value='wanita'>Wanita</option>
              </select>
            </Col>

            <Col>
              <Label>Agama</Label>
              <InputGroup className='mb-3'>
                <Input type='text' name='religion' value={values.religion} onChange={this.props.handleChange} placeholder='Agama' />
              </InputGroup>
            </Col>

            <Col>
              <Label>Nomor Hp</Label>
              <InputGroup className="mb-3">
                <Input type="text" name='phone' value={values.phone} onChange={this.props.handleChange} placeholder='Nomor hp' />
              </InputGroup>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col>
              <Label>Tempat Lahir</Label>
              <InputGroup className="mb-3">
                <Input type="text" name='born_place' value={values.born_place} onChange={this.props.handleChange} placeholder="Tempat lahir" />
              </InputGroup>
            </Col>

            {/* Born date */}
            <Col>
              <Label>Tanggal Lahir</Label>
              <InputGroup className="mb-3">
                <Input type="date" name='born_date' value={values.born_date} onChange={this.props.handleChange} />
              </InputGroup>
            </Col>

            <Col>
              <Label>Golongan Darah</Label>
              <select className='form-control' name='blood_type' value={values.blood_type} onChange={this.props.handleChange}>
                <option>---</option>
                <option value='A'>A</option>
                <option value='B'>B</option>
                <option value='AB'>AB</option>
                <option value='O'>O</option>
              </select>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col>
              <Label>Alamat</Label>
              <InputGroup className="mb-3">
                <Input type='textarea' name='address' value={values.address} onChange={this.props.handleChange} placeholder='Alamat' />
              </InputGroup>
            </Col>

            <Col>
              <Label>Riwayat Penyakit</Label>
              <InputGroup className="mb-3">
                <Input type='textarea' name='disease_history' value={values.disease_history} onChange={this.props.handleChange} placeholder='Riwayat Penyakit' />
              </InputGroup>
            </Col>
          </Row>

          <Button color='primary' onClick={this.back}>Back</Button>
          <span style={{ paddingLeft: '5px' }} />
          <Button color='primary' onClick={this.saveAndContinue}>Save and Continue</Button>
        </Form>
      </div>
    )
  }
}

export default PersonalInformation
