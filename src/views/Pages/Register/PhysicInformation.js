import React from "react";
import { Col, Row, Form, Input, InputGroup, Label, Button } from 'reactstrap'


class PhysicInformation extends React.Component{

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
        <h1>Physic Information</h1>
        <br />

        <Form>
          <Row className='justify-content-center'>
            <Col>
              <Label>Tinggi Badan (cm)</Label>
              <InputGroup className="mb-4">
                <Input type="text" name='body_height' value={values.body_height} onChange={this.props.handleChange} placeholder='Tinggi badan' />
              </InputGroup>
            </Col>

            <Col>
              <Label>Berat Badan (kg)</Label>
              <InputGroup className="mb-4">
                <Input type="text" name='body_weight' value={values.body_weight} onChange={this.props.handleChange} placeholder='Berat badan' />
              </InputGroup>
            </Col>

            <Col>
              <Label>Panjang Tarikan (inch)</Label>
              <InputGroup className="mb-4">
                <Input type="text" name='draw_length' value={values.draw_length} onChange={this.props.handleChange} placeholder='Panjang tarikan busur' />
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

export default PhysicInformation
