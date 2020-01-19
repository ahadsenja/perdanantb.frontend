import React from "react";
import { Button, ListGroup, ListGroupItem, Row, Col } from 'reactstrap'


class Confirmation extends React.Component {

  saveAndContinue = (event) => {
    event.preventDefault();
    this.props.nextStep();
  };

  back = (event) => {
    event.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values: { full_name, username, password, phone, gender, born_place, born_date, address, religion,
      identity_card_number, identity_card_photo, blood_type, disease_history, body_height,
      body_weight, draw_length } } = this.props;

    return (
      <div>
        <h1>Confirm your information details</h1>
        <p className='text-muted'>Tekan confirm jika data yang Anda masukkan sudah benar!</p>
        <br />

        <Row>
          <Col>
            <h5>Account Information</h5>
            <ListGroup>
              <ListGroupItem>
                <span><strong>Full Name : </strong></span> { full_name }
              </ListGroupItem>

              <ListGroupItem>
                <span><strong>Username : </strong></span> { username }
              </ListGroupItem>

              <ListGroupItem>
                <span><strong>Password : </strong></span> { password }
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col>
            <h5>Identity Details</h5>
            <ListGroup>
              <ListGroupItem>
                <span><strong>NIK : </strong></span> { identity_card_number }
              </ListGroupItem>

              <ListGroupItem>
                <span><strong>Foto KTP : </strong></span> { identity_card_photo }
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>

        <br />
        <Row>
          <Col>
            <h5>Personal Information</h5>
            <ListGroup>
              <ListGroupItem>
                <span><strong>Jenis Kelamin : </strong></span> { gender }
              </ListGroupItem>

              <ListGroupItem>
                <span><strong>Agama : </strong></span> { religion }
              </ListGroupItem>

              <ListGroupItem>
                <span><strong>No Hp : </strong></span> { phone }
              </ListGroupItem>

              <ListGroupItem>
                <span><strong>Tempat Lahir : </strong></span> { born_place }
              </ListGroupItem>

              <ListGroupItem>
                <span><strong>Tanggal Lahir : </strong></span> { born_date }
              </ListGroupItem>

              <ListGroupItem>
                <span><strong>Golongan Darah : </strong></span> { blood_type }
              </ListGroupItem>

              <ListGroupItem>
                <span><strong>Alamat : </strong></span> { address }
              </ListGroupItem>

              <ListGroupItem>
                <span><strong>Riwayat Penyakit : </strong></span> { disease_history }
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col>
            <h5>Physic Information</h5>
            <ListGroup>
              <ListGroupItem>
                <span><strong>Tinggi Badan : </strong></span> { body_height }
              </ListGroupItem>

              <ListGroupItem>
                <span><strong>Berat Badan : </strong></span> { body_weight }
              </ListGroupItem>

              <ListGroupItem>
                <span><strong>Panjang Tarikan : </strong></span> { draw_length }
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>

        <br />
        <Button color='primary' onClick={this.back}>Back</Button>
        <span style={{ paddingLeft: '5px' }} />
        <Button color='primary' onClick={this.props.onRegister}>Confirm</Button>
      </div>
    )
  }
}

export default Confirmation
